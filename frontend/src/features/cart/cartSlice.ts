import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    // Add other fields as needed
}

interface CartData {
    products: Product[];
}

// Define the initial state using that type

const initialState: CartData = {
    products: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find(p => p.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity

                if (existingProduct.quantity <= 0) {
                    state.products = state.products.filter(p => p.id !== action.payload.id);
                }
            } else {
                if (action.payload.quantity > 0) {
                    state.products.push(action.payload);
                }
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(p => p.id == action.payload);
        },
        clearCart: (state) => {
            state.products = [];
        }

    }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
