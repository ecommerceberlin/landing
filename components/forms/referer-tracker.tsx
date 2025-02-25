'use client'

import { useEffect } from 'react'
import { saveReferer } from '@/app/actions/save-referer'

export function RefererTracker() {
  useEffect(() => {
    saveReferer()
  }, [])
  
  return null // Invisible component
}