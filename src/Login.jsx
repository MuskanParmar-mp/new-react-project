 import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ setIsLoggedIn, setRole }) {
  const [creds, setCreds] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Backend ko request bhejo
      const res = await axios.post('http://127.0.0.1:8000/api/login/', creds);
      
      // 1. Token save karo (JWT)
      localStorage.setItem('token', res.data.access);
      
      // 2. Role determine karo (Backend se aayi value use karna best hai)
      // Agar backend se 'is_recruiter' aa raha hai toh:
      const userRole = res.data.is_recruiter ? 'recruiter' : 'employee';
      
      // Backup logic agar backend update nahi kiya:
      // const userRole = (creds.username === "admin123") ? 'recruiter' : 'employee';

      localStorage.setItem('role', userRole);
      
      // 3. State update karo
      setIsLoggedIn(true);
      setRole(userRole);

      // 4. Sahi Dashboard par bhejo
      if (userRole === 'recruiter') {
        navigate('/admin-dash');
      } else {
        navigate('/user-dash');
      }
    } catch (err) {
      alert("Login Failed: " + (err.response?.data?.error || "Check your credentials"));
    }
  };

  return (
  <div className="flex justify-center items-center h-[70vh] bg-gradient-to-r from-purple-600 to-blue-500">
    <form 
      onSubmit={handleLogin} 
      className="bg-gray-900 p-10 rounded-3xl shadow-2xl w-96 border border-gray-800"
    >
      <h2 className="text-3xl font-extrabold text-center mb-8 text-indigo-400 tracking-tight uppercase italic">
        JobWay Portal
      </h2>
      
      <div className="space-y-4">
        <input 
          type="text" 
          placeholder="Enter your username" 
          className="w-full p-4 bg-gray-800 border-none rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 transition" 
          onChange={e => setCreds({...creds, username: e.target.value})} 
          required
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          className="w-full p-4 bg-gray-800 border-none rounded-2xl outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 transition" 
          onChange={e => setCreds({...creds, password: e.target.value})} 
          required
        />
      </div>

      <button className="w-full mt-8 bg-indigo-500 text-white py-4 rounded-2xl font-extrabold hover:bg-indigo-600 shadow-lg transform active:scale-95 transition">
        SIGN IN
      </button>
      
      <p className="mt-6 text-xs text-center text-gray-400 font-medium uppercase tracking-wide">
        Recruiter Access: 'admin123' | Candidate Access: 'user123'
      </p>
    </form>
  </div>
);
}

export default Login;