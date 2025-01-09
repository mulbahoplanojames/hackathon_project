import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Products } from "../sanity.types";

interface CartItem {
  product: Products;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Products) => void;
  removeItem: (productId: string) => void;
  deleteCartProduct: (productId: string) => void;
  resetCart: () => void;
  getTotalPrice: () => number;
  getSubTotalPrice: () => number;
  getItemCount: (productId: string) => number;
  getGroupedItem: () => CartItem[];
}

const useCartStore = create<CartState>()(
  persist<CartState>(
    (set, get: () => CartState) => ({
      items: [],
      // Add item to cart function
      addItem: (product: Products) =>
        set((state: CartState) => {
          const existingItem = state.items.find(
            (item: CartItem) => item.product._id === product._id
          );

          if (existingItem) {
            return {
              items: state.items.map((item: CartItem) => {
                if (item.product._id === product._id) {
                  return { ...item, quantity: item.quantity + 1 };
                }
                return item;
              }),
            };
          } else {
            return {
              items: [...state.items, { product, quantity: 1 }],
            };
          }
        }),

      // Remove item from cart function
      removeItem: (productId: string) =>
        set((state: CartState) => {
          return {
            items: state.items.reduce((acc: CartItem[], item: CartItem) => {
              if (item.product._id === productId) {
                if (item.quantity > 1) {
                  return [...acc, { ...item, quantity: item.quantity - 1 }];
                } else {
                  return acc;
                }
              } else {
                return [...acc, item];
              }
            }, [] as CartItem[]),
          };
        }),

      // Delete cart product function
      deleteCartProduct: (productId: string) =>
        set((state: CartState) => {
          return {
            items: state.items.filter(
              (product: CartItem) => product.product?._id !== productId
            ),
          };
        }),

      // Reset cart function
      resetCart: () => set({ items: [] }),

      // get total price function
      getTotalPrice: (): number => {
        return get().items.reduce(
          (total: number, item: CartItem) =>
            total + (item.product.price ?? 0) * item.quantity,
          0
        );
      },

      // get Sub total price
      getSubTotalPrice: (): number => {
        return get().items.reduce((total: number, item: CartItem) => {
          const price: number = item.product.price ?? 0;
          const discount: number = ((item.product.discount ?? 0) * price) / 100;
          const discountedPrice: number = price + discount;
          return total + discountedPrice * item.quantity;
        }, 0);
      },

      // get Item count function
      getItemCount: (productId: string): number => {
        const item: CartItem | undefined = get().items.find(
          (item: CartItem) => item.product._id === productId
        );
        return item ? item.quantity : 0;
      },

      // get Group item function
      getGroupedItem: (): CartItem[] => {
        return get().items;
      },
    }),

    { name: "cart-store" }
  )
);

export default useCartStore;
