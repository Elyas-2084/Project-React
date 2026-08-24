import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: undefined,
    username: undefined
}

const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            state.token = action.payload.token
            state.username = action.payload.username
        },
        logOut: (state) => {
            state.token = undefined
            state.username = undefined
        }
    }
})

export const { login, logOut } = auth.actions

export default auth.reducer

