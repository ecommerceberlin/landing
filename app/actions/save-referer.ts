"use server"

import { cookies } from 'next/headers'
import { headers } from 'next/headers'

export async function saveReferer() {
    const cookieStore = await cookies()
    const hasRefererCookie = cookieStore.has('initial_referer')
    console.log(`hasRefererCookie`)

    if (!hasRefererCookie) {
    // Get referer from headers
        const headersList = await headers()
        const referer = headersList.get('referer')

        if (referer) {
            // Set the cookie
            cookieStore.set('initial_referer', referer, {
                expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 7 days
                path: '/',
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax'
            })
            return { success: true, referer }
        }
    }else{
        return { success: false }
    }
   
}