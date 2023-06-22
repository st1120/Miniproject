import React, { useState } from 'react';
import '../Styles/Remote.css';

const Remote = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpGenerated, setOtpGenerated] = useState(false);
  const [otp, setOtp] = useState('');
  const [enteredOtp, setEnteredOtp] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleGenerateOTP = () => {
    // Simulate OTP generation logic here
    const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setOtp(generatedOtp);
    setOtpGenerated(true);
  };

  const handleOtpChange = (event) => {
    setEnteredOtp(event.target.value);
  };

  const handleLogin = () => {
    // Handle login logic here using enteredOtp
    console.log('Logged in with OTP:', enteredOtp);
  };

  return (
    <div className="login-page-container">
      <h2>Login</h2>
      {!otpGenerated ? (
        <div>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <button onClick={handleGenerateOTP}>Generate OTP</button>
        </div>
      ) : (
        <div>
          <p>An OTP has been sent to {phoneNumber}</p>
          <p>OTP: {otp}</p>
          <label htmlFor="otp">Enter OTP:</label>
          <input
            type="text"
            id="otp"
            value={enteredOtp}
            onChange={handleOtpChange}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Remote;
