
import { verifyRequest } from '@/lib/qstash'
import { NextResponse } from 'next/server'
import { mapContextToSlackWebhook } from "@/settings/notifications";
import { getWebhookByName } from "@/db/notifications/get-webhooks";
import { formatObject } from "@/lib/utils";



// Add this config to bypass middleware
export const config = {
api: {
bodyParser: true
},
matcher: [] // Empty matcher to bypass middleware
}

export async function POST(request: Request) {
  const { isValid, body, error } = await verifyRequest(request)

  if (!isValid) {
    console.error('Invalid QStash request:', error)
    return NextResponse.json({ error: 'Invalid request' }, { status: 401 })
  }
  
  console.log('Received QStash webhook:', body)

  // Create a new object without the accept property

  const webhook = await(getWebhookByName(mapContextToSlackWebhook(body.context)))

  if (webhook?.webhook) {

  await fetch(webhook.webhook, {
    method: 'POST',
    body: JSON.stringify({text: formatObject(body)})
  })

  }else{
    throw new Error(`Webhook not found for context: ${body.context}`)
  }

  return NextResponse.json({
    message: "Worker processed successfully",
    receivedAt: new Date(),
    data: body
  })
} 