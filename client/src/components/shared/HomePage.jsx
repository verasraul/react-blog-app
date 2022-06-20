import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";

import "../../styling/home.css";


function HomePage() {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profilesObj));
    };


  return (
    <div className="home-page" style={{ display: isSignedIn ? "none" : "" }}>
       {!isSignedIn ? (
        <div className="login-message">
            <h2>📗</h2>
            <h1> A Readers Favorite Place!</h1>
            <p>
                We provide high quality online resource for reading blogs. Just sign up and start reading some quality blogs.
            </p>
            <GoogleLogin
            clientId="927768120339-qcnrjmt9k77hh0ockktg6cfrktcluelk.apps.googleusercontent.com"
            render={(renderProps) => (
                <button
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