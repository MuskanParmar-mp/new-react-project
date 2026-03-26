import { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./Login.css"

function Login(){

  const navigate = useNavigate();

  let [loginval, setloginval] = useState({
    email: "",
    password: ""
  })

  function logininput(e){
    let { name, value } = e.target
    setloginval({ ...loginval, [name]: value })
  }

  function loginsubmit(e){
    e.preventDefault()

    let localdata = JSON.parse(localStorage.getItem("userdata"))

    if(!localdata){
      alert("Please signup first")
      return
    }

    if(
      loginval.email !== localdata.email ||
      loginval.password !== localdata.password
    ){
      alert("User not found")
    } else {
      alert("Login successfully")


    localStorage.setItem("isLogin", true)   // login save

    navigate("/")
    }
  }

  return(
    <div className="login-container">
      <form className="login-box" onSubmit={loginsubmit}>
        <h2>Login</h2>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={logininput}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            onChange={logininput}
          />
        </div>

        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
