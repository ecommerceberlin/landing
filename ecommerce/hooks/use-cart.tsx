// hooks/useCart.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface CartItem {
  id: number
  quantity: number
  // other item properties
}

interface CartStore {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

export const useCart = create(
  persist<CartStore>(
    (set) => ({
      items: [],
      addItem: (item) => set((state) => ({ 
        items: [...state.items, item] 
      })),
      removeItem: (id) => set((state) => ({ 
        items: state.items.filter(item => item.id !== id) 
      })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'cart-storage' // storage key
    }
  )
)