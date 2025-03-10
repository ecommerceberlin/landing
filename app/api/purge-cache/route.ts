import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {

    const tag = request.nextUrl.searchParams.get('tag')
    const path = request.nextUrl.searchParams.get('path')

    if(!tag && !path) {
        return NextResponse.json({ message: 'No tag or path provided' }, { status: 400 })
    }

    if (tag) {
        revalidateTag(tag)
    }

    if (path) {
        revalidatePath(path)
    }

    return NextResponse.json({ message: 'Cache purged' })
}   