import { Avatar } from "@material-ui/core"; // Avatar is a materialUI component.
import { useState } from "react";
import { GoogleLogout } from "react-google-login"; // Log-out option.
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../../features/userSlice"; // import what's necessary from the userSlice component into NavBar.

import "../../styling/navbar.css"; // import navbar stylesheet to stye component.

function NavBar() {
    // HOOKS
    const [inputValue, setInputValue] = useState("tech"); // useState hook only changes component necessary without refreshing entire page.
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch(); // using dispatch from react-redux.

    const logout = (response) => { // when users click logout, it will dispatch the reducer function from userSlice.
        dispatch(setSignedIn(false)); // then it will set the sign-in to false.
        dispatch(setUserData(null)); // and set user data to null (inaccessible).
    };

    const handleClick = (e) => {
        e.preventDefault(); // prevents the entire site from refreshing when clicking search button.
        dispatch(setInput(inputValue)); // set input value to search string value provided by user.
    };

  return (
    <div className="navbar">
        <h1 className="navbar-header">BlogSpot 💬</h1>
        {isSignedIn && ( // if the user is signed (isSignedIn = true) then only this block of code will be executed.
            <div className="blog-search"> {/*search-bar division for blog will take input.*/}
                <input // the search division takes input.
                className="search" // CSS classname.
                placeholder="Search for a blog" // this is a placeholder text for input section.
                value={inputValue} // sets initial input value, set to 'tech'
                onChange={(e) => setInputValue(e.target.value)} // updates/changes input value for useState hook (setInputValue) from user input. e.target refers to the input element that triggered the event and str.target.value contains the current value of the input.
                />
                {/*Search button*/}
                <button className="submit" onClick={handleClick}> {/*when user clicks on search that wil call the 'handleClick function*/}
                    Search 
                </button>
            </div>
        )}

        {isSignedIn ? ( // if user is signed in then render/show the 
            <div className="=navbar-user-data">
                {/* Render profile avatar/picture from user's gmail.  */}
                <Avatar
                    className="user" // classname for stylesheet.
                    // userData contains the information of the google user signed in.
                    src={userData?.imageUrl} // this sources profile picture from the google account signed in. userData object contains all the data of the gmail user through which they signed in and has an 'imageurl' property.
                    alt={userData?.name} // alternatively if there's no user pic, username will be shown only.
                    // userData values come from the userSlice component.
                    // the user's data is populated from the GoogleLogin user that the userSlice reducers have accessed and userData is updated using the dispatch (useDispach) function.
                />
                <h1 className="signedIn">{userData?.givenName}</h1> 

                <GoogleLogout
                    clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_KEY}`}
                    render={(renderProps) => (
                        <button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="logout-button"
                        >
                            Logout 😦
                        </button>
                    )}
                    onLogoutSuccess={logout}
                />
            </div>
            ) : (
                <h1 className="notSignedIn">User not available 😞</h1>
        )}
    </div>
  )
}

export default NavBar;