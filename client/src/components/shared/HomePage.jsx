import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";

import "../../styling/home.css";


function HomePage() {
    const isSignedIn = useSelector(selectSignedIn); // Call useSelector to get selectSignedIn value from userSlice component.

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profilesObj));
    };


  return ( // render home classe with default style isSignedIn. 
    <div className="home-page" style={{ display: isSignedIn ? "none" : "" }}> {/* if user signed in is true then value is none else is null, isSignedIn gets value from useSelector  */}
       {!isSignedIn ? (
        <div className="login-message">
            <h2>📗</h2>
            <h1> A Readers Favorite Place!</h1>
            <p>
                We provide high quality online resource for reading blogs. Just sign up and start reading some quality blogs.
            </p>
            <GoogleLogin
            clientId={`${process.env.REACT_APP_GOOGLE_OAUTH_KEY}`}
            render={(renderProps) => (
                <button // button for GoogleLogin Component.
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login-button"
                >
                    Login with Google
                </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
            />
        </div>
       ) : (
        ""
       )}
    </div>
  );
};

export default HomePage;