import React, { useState } from 'react';
import './SignUpStyles.css';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log("New User Signed Up:", formData);
    alert(`Welcome to the journey, ${formData.name}!`);
    
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <div className="signup-container">
      <h1>Join the Adventure</h1>
      <p>Create an account to save your favorite destinations.</p>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input 
          type="email" 
          placeholder="Email Address" 
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input 
          type="password" 
          placeholder="Password" 
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;