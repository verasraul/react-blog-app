import { createSlice } from "@reduxjs/toolkit";

// creating user slice.
const userSlice = createSlice({
    // userSlice parameters.
        name: "user",
        initialState: { // initialState is an object with key-pair values.
            isSignedIn: false, // initial state of user, initially user is not signed in.
            userData: null, // user is not initially signed-in, therefore userData = null (unavailable).
            searchInput: "tech", // default search results to render when user is not signed in, initially 'tech' news resuts will be shown.
            blogData: null, // search results will only render when user is signed in, blogData is initially null (unavaible).
        },
    // REDUCERS
    // reducers are used to set and get data.
    reducers: { // these reducers are used manipulate the initialState properties.
        setSignedIn: (state, action) => { // set isSignedIn state.
            state.isSignedIn = action.payload;
        },
        setUserData: (state, action) => { // set userData state.
            state.userData = action.payload;
        },
        setInput: (state, action) => { // set setInput state.
            state.searchInput = action.paylod;
        },
        setBlogData: (state, action) => { // set setInput state.
            state.blogData = action.payload;
        },
    },
});
// creating a constant to export reducers.
export const {
    setSignedIn,
    setUserData,
    setInput,
    setBlogData,
} = userSlice.actions; // all exported reducers are assigned to userSlice.actions, allowing reducers imported in others component to be called by using userSlice.actions.setSignedIn.
// creating constants to export state values individually.
export const selectSignedIn = (state) => state.user.isSignedIn;
export const selectUserData = (state) => state.user.userData;
export const selectUserInput = (state) => state.user.searchInput;
export const selectBlogData = (state) => state.user.blogData;

export default userSlice.reducer;
