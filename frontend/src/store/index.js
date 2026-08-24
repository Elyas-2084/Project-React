import { configureStore } from "@reduxjs/toolkit";
import auth from './Slices/Auth'
import cart from './Slices/Cart'

const store = configureStore({
    reducer: {
        authRedux: auth,
        cartRedux: cart
    }
})

export default store
