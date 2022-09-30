import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit"
import usersSlice from "./reducers/usersSlice";
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        users: usersSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})


export default store;