"use client"

import { useRouter } from "next/navigation"
import {t} from '@/scripts/translate'

export const Success = ({data}: {data?: Record<string, any>}) => {
    
  const router = useRouter()

  return (<div className="my-10 text-left text-[4rem] font-light">{t(`
form.status.success`)}</div>)

}