import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Sign.css"

function Sign(){

  let [signfrm, setFrm] = useState({
    name: "",
    age: "",
    email: "",
    password: ""
  })

  let navigator = useNavigate()

  function inputdata(e){
    const { name, value } = e.target
    setFrm({ ...signfrm, [name]: value })
  }

  function handlesubmit(e){
    e.preventDefault()
    localStorage.setItem("userdata", JSON.stringify(signfrm))
    navigator("/")
  }

  return(
    <div className="signup-container">
      <form className="signup-box" onSubmit={handlesubmit}>
        <h2>Create Account</h2>

        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={inputdata}
          />
        </div>

        <div className="input-group">
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Enter your age"
            onChange={inputdata}
          />
        </div>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={inputdata}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Create a password"
            onChange={inputdata}
          />
        </div>

        <button type="submit" className="signup-btn">
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default Sign
