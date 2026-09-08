import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    listOfProduct: []
}

const cartSlice = createSlice({
    name: 'Cart',
    initialState: initialState,
    reducers: {
        addProduct: (state, action) => {
            let isAdd = false
            const countToAdd = action.payload.count

            state.listOfProduct = state.listOfProduct.map((e) => {
                if (e.id === action.payload.id) {
                    e.quantityCart = e.quantityCart + countToAdd
                    isAdd = true
                    return e
                }
                return e
            })
            if (isAdd === false) {
                state.listOfProduct.push({ ...action.payload, quantityCart: countToAdd })
            }
        },

        removeProduct: (state, action) => {
            state.listOfProduct = state.listOfProduct?.filter((e) => {

                if (e.id === action.payload) {
                    e.quantityCart = e.quantityCart - 1
                    if (e.quantityCart === 0) {
                        return false
                    }
                    return e
                }
                return true
            })
        },

        clearAll: (state) => {
            state.listOfProduct = []
        },
        clearProduct: (state, action) => {
            state.listOfProduct = state.listOfProduct.filter((e) => {
                return e.id !== action.payload
            })
        }
    }
})

export const { addProduct, removeProduct, clearAll, clearProduct } = cartSlice.actions

export default cartSlice.reducer


