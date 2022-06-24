import './login.css';
import { auth, provider } from '../../firebase-config';
import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {

  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((res) => {
      localStorage.setItem('isAuth', true)
      setIsAuth(true)
      navigate('/');
    })
  }
  return (
    <div className="Login">
      <button className="loginButton" onClick={signInWithGoogle}>Sign In with Google</button>
    </div>
  )
}

export default Login;