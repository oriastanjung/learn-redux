import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import usersSlice from "./reducers/usersSlice";
import loginSlice from "./reducers/loginSlice"
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        users: usersSlice,
        login : loginSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export default store;