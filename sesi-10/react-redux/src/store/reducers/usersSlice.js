import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = "https://randomuser.me/api/?results=10";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const resp = await axios.get(USERS_URL);
    const data = await resp.data
    // console.log(resp);
    return data.results;
  } catch (error) {
    console.log(error);
  }
});

const initialState = {
  usersList: [],
  isLoading : false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setUsers: (state, action) => {
      state.usersList = action.payload;
    },
    resetUsers: (state) => {
      state.usersList = initialState.usersList;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.pending, (state) => {
        state.isLoading =true;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
      state.usersList = action.payload;
    });
  },
});

export const { setUsers, resetUsers } = usersSlice.actions;
export default usersSlice.reducer;
