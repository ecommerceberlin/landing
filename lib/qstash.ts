import { Client, Receiver } from '@upstash/qstash'

export const QUEUE_NAME = 'participant-sync'
export const CHUNK_SIZE = 100
export const WORKER_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/api/sync/worker` 

if (!process.env.QSTASH_TOKEN) {
  throw new Error('QSTASH_TOKEN is required')
}

if (!process.env.QSTASH_CURRENT_SIGNING_KEY || !process.env.QSTASH_NEXT_SIGNING_KEY) {
  throw new Error('QSTASH signing keys are required')
}

const qstash = new Client({
  token: process.env.QSTASH_TOKEN || ''
})

// Initialize QStash receiver
const receiver = new Receiver({
  currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY || '',
  nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY || ''
})

// Verify QStash signature in production
export const verifyRequest = async (request: Request) => {
  try {
    if (process.env.NODE_ENV !== 'production') return { isValid: true, body: await request.json() }

    const body = await request.json()
    const signature = request.headers.get('upstash-signature')

    if (!signature) {
      return { isValid: false, error: 'Missing signature' }
    }

    const isValid = await receiver.verify({
      signature,
      body: JSON.stringify(body)
    })

    return { isValid, body }
  } catch (error) {
    console.error('QStash verification error:', error)
    return { isValid: false, error }
  }
}



// Usage examples:
/*
// Send to queue
await publishToQueue({
  url: 'https://your-domain.com/api/queue/handler',
  data: { userId: '123', task: 'sendEmail' },
  delay: 60 // optional 60 seconds delay
})

// Create scheduled task
await createSchedule({
  url: 'https://your-domain.com/api/scheduled/task',
  cronExpression: '0 0 * * *', // daily at midnight
  data: { type: 'dailyReport' }
})
*/


export const publishToQueue = async <T extends object>({
  url,
  data,
  delay,
  retries = 3,
  notBefore,
  deduplicationId
}: {
  url: string
  data: T
  delay?: number
  retries?: number
  notBefore?: Date
  deduplicationId?: string
}) => {
  try {
    const response = await qstash.publishJSON({
      url,
      body: data,
      delay,
      retries,
      notBefore: notBefore?.getTime(),
      deduplicationId
    })
    
    return {
      messageId: response.messageId,
      success: true
    }
  } catch (error) {
    console.error('QStash publish error:', error)
    return {
      success: false,
      error
    }
  }
}

