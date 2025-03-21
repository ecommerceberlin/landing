"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/ecommerce/hooks/use-cart"
import { useProduct } from "@/ecommerce/hooks/use-product"

interface AddToCartButtonProps {
  productId: number
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const { data: product } = useProduct(productId)

  if (!product) return null

  return (
    <Button onClick={() => addItem({ ...product, quantity: 1 })}>
      Add to Cart
    </Button>
  )
}