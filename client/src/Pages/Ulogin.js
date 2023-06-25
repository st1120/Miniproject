import React, { useState } from 'react';
import '../Styles/Ulogin.css';
import { Link } from "react-router-dom"

function Ulogin(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., send username and password to the server
    console.log('Logging in...');
  };

  return (
    <div className="login-container">
      <h2>User Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <p className='ureg'>New User? <Link to='/Userreg'>Signup</Link></p>
      </form>
    </div>
    
    
  );
}
export default Ulogin;
