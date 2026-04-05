 import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '', phone: '', city: '' });
  const [files, setFiles] = useState({ profile_pic: null, resume: null });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    data.append('profile_pic', files.profile_pic);
    data.append('resume', files.resume);

    try {
      await axios.post('http://127.0.0.1:8000/api/register/', data);
      alert("Employee Registered!");
    } catch (err) { alert("Registration Failed!"); }
  };

 return (
  <div className="flex justify-center items-center p-10 min-h-screen bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500">
    <form 
      onSubmit={handleSubmit} 
      className="bg-gray-900/80 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-[450px] space-y-5 border border-gray-700"
    >
      <h2 className="text-2xl font-extrabold text-indigo-400 text-center uppercase tracking-wide">
        Employee Signup
      </h2>

      <input 
        type="text" 
        placeholder="Username" 
        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
        onChange={e => setFormData({...formData, username: e.target.value})} 
        required
      />
      <input 
        type="email" 
        placeholder="Email" 
        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
        onChange={e => setFormData({...formData, email: e.target.value})} 
        required
      />
      <input 
        type="text" 
        placeholder="Phone" 
        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
        onChange={e => setFormData({...formData, phone: e.target.value})} 
        required
      />
      <input 
        type="text" 
        placeholder="City" 
        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
        onChange={e => setFormData({...formData, city: e.target.value})} 
        required
      />
      <input 
        type="password" 
        placeholder="Password" 
        className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:ring-2 focus:ring-indigo-500 outline-none transition" 
        onChange={e => setFormData({...formData, password: e.target.value})} 
        required
      />

      <div>
        <label className="text-xs font-bold text-gray-400 uppercase">Profile Pic</label>
        <input 
          type="file" 
          onChange={e => setFiles({...files, profile_pic: e.target.files[0]})} 
          className="w-full text-sm mt-1 text-gray-200"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-gray-400 uppercase">Resume (PDF)</label>
        <input 
          type="file" 
          onChange={e => setFiles({...files, resume: e.target.files[0]})} 
          className="w-full text-sm mt-1 text-gray-200"
        />
      </div>

      <button className="w-full bg-indigo-500 text-white py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-600 transform active:scale-95 transition">
        Register as Employee
      </button>
    </form>
  </div>
);
}

export default Register;