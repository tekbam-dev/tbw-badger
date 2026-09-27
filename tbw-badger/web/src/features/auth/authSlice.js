import {createSlice} from "@reduxjs/toolkit";

const storedUser = sessionStorage.getItem("tbw-badger-user");

const initialState = {
    user:storedUser ? JSON.parse(storedUser) : null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setUser(state,action){
            state.user = action.payload;
        },
        logout(state){
            state.user = null;
        },
    }
});

export const {setUser, logout} = authSlice.actions;
export default authSlice.reducer;