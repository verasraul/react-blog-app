import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from "../../features/userSlice";
import "../../styling/home.css";


function HomePage() {
  return (
    <div>
       Welcome to HomePage
    </div>
  )
}

export default HomePage;