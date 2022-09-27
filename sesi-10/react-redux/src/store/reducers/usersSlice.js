import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    usersList : []
};


export const usersSlice = createSlice({
    name : "users",
    initialState : initialState,
    reducers : {
        setUsers : (state, action) => {
            state.usersList = action.payload
        },
        resetUsers : (state) => {
            state.usersList = initialState.usersList
        }
    }
})


export const { setUsers, resetUsers } = usersSlice.actions;
export default usersSlice.reducer