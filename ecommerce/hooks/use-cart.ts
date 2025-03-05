// hooks/useCart.ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { shallow } from 'zustand/shallow'
import { createWithEqualityFn } from 'zustand/traditional'

// types/product.ts
export interface Product {
  id: number
  name: string
  price: number
  image: string
  stock: number // This will be our maxQuantity
  attributes?: Record<string, string>
}

interface CartItem extends Product {
  quantity: number
}

interface CartStore {
  items: CartItem[]
  // Cart actions
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  clearCart: () => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
  setQuantity: (id: number, quantity: number) => void
  // Cart calculations
  totalItems: () => number
  totalPrice: () => number
  isItemInCart: (id: number) => boolean
  // Cart state
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  error: string | null
  setError: (error: string | null) => void
}

export const useCart = createWithEqualityFn<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isLoading: false,
      error: null,

      setIsLoading: (loading) => set({ isLoading: loading }),
      setError: (error) => set({ error }),

      addItem: (item) => {
        if (item.stock && item.quantity > item.stock) {
          set({ error: `Only ${item.stock} items available` })
          return
        }

        set((state) => {
          const existingItem = state.items.find(i => i.id === item.id)
          if (existingItem) {
            const newQuantity = existingItem.quantity + (item.quantity || 1)
            
            // Check stock limit
            if (item.stock && newQuantity > item.stock) {
              set({ error: `Cannot add more than ${item.stock} items` })
              return state
            }

            return {
              items: state.items.map(i => 
                i.id === item.id 
                  ? { ...i, quantity: newQuantity }
                  : i
              )
            }
          }
          return { items: [...state.items, { ...item, quantity: item.quantity || 1 }] }
        })
      },

      removeItem: (id) => set((state) => ({ 
        items: state.items.filter(item => item.id !== id),
        error: null 
      })),

      clearCart: () => set({ items: [], error: null }),

      increaseQuantity: (id) => set((state) => {
        const item = state.items.find(i => i.id === id)
        if (item?.stock && item.quantity >= item.stock) {
          set({ error: `Cannot add more than ${item.stock} items` })
          return state
        }
        return {
          items: state.items.map(item =>
            item.id === id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          error: null
        }
      }),

      decreaseQuantity: (id) => set((state) => ({
        items: state.items.map(item =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter(item => item.quantity > 0),
        error: null
      })),

      setQuantity: (id, quantity) => set((state) => {
        const item = state.items.find(i => i.id === id)
        if (item?.stock && quantity > item.stock) {
          set({ error: `Cannot add more than ${item.stock} items` })
          return state
        }
        return {
          items: quantity > 0
            ? state.items.map(item =>
                item.id === id 
                  ? { ...item, quantity }
                  : item
              )
            : state.items.filter(item => item.id !== id),
          error: null
        }
      }),

      // Selectors
      totalItems: () => get().items.reduce((sum, item) => sum + item.quantity, 0),
      totalPrice: () => get().items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
      isItemInCart: (id) => get().items.some(item => item.id === id),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  ),
  shallow
)

// Optimized selectors without needing to pass shallow
export const useCartItems = () => useCart((state) => state.items)
export const useCartTotals = () => {
  const totalItems = useCart((state) => state.totalItems())
  const totalPrice = useCart((state) => state.totalPrice())
  return { totalItems, totalPrice }
}

// Example usage in a component:
function ProductCard({ product }: { product: Product }) {
  const { addItem, isItemInCart, error } = useCart()
  
  const handleAddToCart = () => {
    addItem({
      ...product,
      quantity: 1,
      stock: product.stock
    })
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>In stock: {product.stock}</p>
      <button 
        onClick={handleAddToCart}
        disabled={isItemInCart(product.id)}
      >
        Add to Cart
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  )
}

// Example in cart component:
function CartItem({ item }: { item: CartItem }) {
  const { increaseQuantity, decreaseQuantity, setQuantity } = useCart()

  return (
    <div>
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <div className="flex items-center gap-2">
        <button onClick={() => decreaseQuantity(item.id)}>-</button>
        <input 
          type="number" 
          value={item.quantity}
          max={item.stock}
          onChange={(e) => setQuantity(item.id, parseInt(e.target.value))}
        />
        <button 
          onClick={() => increaseQuantity(item.id)}
          disabled={item.quantity >= item.stock}
        >+</button>
      </div>
      <p>Stock: {item.stock}</p>
    </div>
  )
}