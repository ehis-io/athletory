import "./register.css"
import {useState} from 'react'
import axios from 'axios'
const userUrl= 'http://localhost:3030/user/user'
  
export default function Register() {

  const [user, setUser] = useState({
    "firstname":"",
    "lastname":"",
    "email":"",
    "password":"",
  },
  )

  function handle(e){

    setUser({...user, [e.target.id]: e.target.value})
    console.log(user)
  }
  
  function handleSubmit (e) {
    e.preventDefault()
    console.log(user)

    

    axios.post(userUrl, user).then(res => {
      console.log(res)
      console.log(res.data)
      

    setUser = ({
      
      "firstname": "",
      "lastname": "",
      "email": "",
      "password": "",
    })

    })
  }
    return (
        <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>
          Firstname</label>
        <input 
        onChange={handle}
        className="registerInput" 
        id ='firstname' 
        type="text" 
        placeholder="Enter your firstname..." 
        value= {user.firstname}/>
         <label>Lastname</label>
        <input 
        onChange={handle}
        className="registerInput" 
        id ='lastname' 
        type="text" 
        placeholder="Enter your lastname..." 
        value= {user.lastname}/>
        
        
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
