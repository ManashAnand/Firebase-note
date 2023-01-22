import {useState} from 'react'
import './App.css';
import { 
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut
 } from 'firebase/auth';
import {auth} from './firebase-config'
import { useEffect } from 'react';

function App() {
  const [registerEmail,setRegisterEmail] = useState("");
  const [registerPassword,setRegisterPassword] = useState("");

  const [LoginEmail,setLoginEmail] = useState("");
  const [LoginPassword,setLoginPassword] = useState("");

  const [user,setUser] = useState({});

  useEffect(()=>{
    onAuthStateChanged(auth, (currentUser)=> {
        setUser(currentUser);
    })
  },[user])

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth,LoginEmail,LoginPassword);
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = async () => {
      await signOut(auth);
  }

  return (
    <div className="App">
        <div>
          <h3>Register User</h3>
          <input placeholder='email' value={registerEmail} onChange={(e)=>{setRegisterEmail(e.target.value)}}/>
          <input placeholder='password' value={registerPassword} onChange={(e)=>{setRegisterPassword(e.target.value)}} />
        
          <button onClick={register}>Create User</button>
        </div>

        <div>
          <h3>Login</h3>
          <input placeholder='email' value={LoginEmail} onChange={
            (e)=>{setLoginEmail(e.target.value);
            console.log(e.target.value);
            }
            
            }/>
          <input placeholder='password' value={LoginPassword} onChange={
            (e)=>{setLoginPassword(e.target.value)
            console.log(e.target.value)
            }
            }/>
        
          <button onClick={login}>LOGIN</button>
        </div>

        <h4>User Logged in</h4>
        <div>{user?.email || user?.displayName}</div>

        <button onClick={logout}>Sign Out</button>

    </div>
  );
}

export default App;



// https://www.youtube.com/watch?v=9bXhf_TELP4