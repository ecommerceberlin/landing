import { Kysely } from "kysely"
import { NeonHTTPDialect } from "kysely-neon"
import { DB } from '@/db/kysely-types'

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set')
}

const connectionString = process.env.DATABASE_URL

// Validate URL format
try {
  new URL(connectionString)
} catch (error) {
  throw new Error('DATABASE_URL is not a valid URL')
}

export const dialect = new NeonHTTPDialect({
  connectionString
})

export const db = new Kysely<DB>({
  dialect,  
  log(event): void {
    if(process.env.NODE_ENV === 'development') {
      if (event.level === 'query') {
        console.log('\n=== Query ===')
        console.log(event.query.sql)
        console.log(event.query.parameters)
        // console.log('\n=== Called From ===')
        // console.log(new Error().stack?.split('\n').slice(2).join('\n'))
        console.log('\n=============\n')
      }
    }
  }
})