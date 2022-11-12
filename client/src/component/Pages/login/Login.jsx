import "./login.css";
import {useState} from "react";
import axios from "axios";
const loginUrl= 'http://localhost:3030/auth/login'


export default function Login () {
  const [login, setLogin] = useState({
    'email': '',
    'password':''
  })

  function handle (e) {
    setLogin({ ...login, [e.target.id]: e.target.value })
  }

  function handleSubmit (e) {
    e.preventDefault()
    //console.log(login)
  
    axios.post(loginUrl, login).then(res => {
      console.log(res.data)

    })
}

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" >
        <label>Email</label>
        <input onChange={handle} className="loginInput" id='email' type="text" placeholder="Enter your email..." value={ login.email } />
        <label>Password</label>
        <input onChange={ handle } className="loginInput" id='password' type="password" placeholder="Enter your password..." value={ login.password } />
        <button onClick ={handleSubmit} className="loginButton">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  );
}
