import React, { useState } from 'react';
import '../Styles/Dlogin.css';
import { Link } from "react-router-dom"

function Dlogin(){
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
      <h2>Driver Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">DriverID:</label>
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
        <p className='dreg'>New Driver? <Link to='/Driverreg'>Signup</Link></p>
      </form>
    </div>
    
  );
}
export default Dlogin;
