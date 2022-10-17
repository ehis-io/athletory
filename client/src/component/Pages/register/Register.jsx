import "./register.css"
import {useState} from 'react'

  
export default function Register() {

  const [user, setUser] = useState({
    username:"",
    email:"",
    Password:"",
  })

  function handle(e){
    const newUser ={...user, [e.target.id]: e.target.value}
    setUser(newUser)
  }
  
  function handleSubmit(e){
    e.preventDefault()
    console.log(user)
    setUser({
      username:"",
      email:"",
      password:"",
    })
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>Username</label>
        <input 
        onChange={handle}
        className="registerInput" id ='username' type="text" placeholder="Enter your username..." value= {user.username}/>
        <label>Email</label>
        <input
        onChange={handle} className="registerInput" id ='email' type="text" placeholder="Enter your email..." value= {user.email}/>
        <label>Password</label>
        <input
        onChange={handle} className="registerInput" id= 'password' type="password" placeholder="Enter your password..." value={user.password} />
        <button
        onClick={handleSubmit}
        className="registerButton">Register</button>
      </form>
        <button className="registerLoginButton">Login</button>
    </div>
    )
}
