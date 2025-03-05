import useSWR from 'swr'
import { fetcher } from '@/lib/fetcher'
import { Product } from './use-cart'


export function useProduct(productId: number) {
  const { data, error, isLoading } = useSWR<Product>(
    productId ? `/api/products/${productId}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      dedupingInterval: 600,
    }
  )

  return {
    data,
    isLoading,
    error
  }
}