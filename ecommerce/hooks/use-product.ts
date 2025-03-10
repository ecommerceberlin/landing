"use client"


import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { Product } from './use-cart'


export function useProduct(productId: number) {
  const { data, error, isLoading } = useSWR<Product>(
    productId ? `/api/products/${productId}` : null,
    fetcher,
    {
      revalidateOnFocus: true,
      dedupingInterval: 200,
      refreshInterval: 1000*60,
      revalidateIfStale: true
    }
  )

  return {
    data,
    isLoading,
    error
  }
}