import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";

// configuring store for authentication.
// this allows website to access information by using the functions created in userSlice.
export default configureStore({
    reducer: { 
        user: userReducer, // allows user to access reducer to get/set data in userSlice.
    },
});