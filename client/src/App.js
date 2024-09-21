import './App.css';
import HomePage from './components/shared/HomePage';
import NavBar from './components/shared/NavBar';
import Blogs from './components/shared/Blogs';
import { selectSignedIn } from './features/userSlice';
import { useSelector } from 'react-redux';


function App() {
  const isSignedIn = useSelector(selectSignedIn);
  
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      {isSignedIn && <Blogs />}
    </div>
  );
}

export default App;
