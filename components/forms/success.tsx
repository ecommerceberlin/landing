"use client"

import { useRouter } from "next/navigation"
import {t} from '@/scripts/translate'

export const Success = ({data}: {data: Record<string, any>}) => {
  const router = useRouter()

  return <div>Thank you!</div>
}