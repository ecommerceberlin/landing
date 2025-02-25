"use server"

import { cookies } from 'next/headers'

export async function getReferer() {
    const cookieStore = await cookies()
    return cookieStore.get('initial_referer')?.value
}