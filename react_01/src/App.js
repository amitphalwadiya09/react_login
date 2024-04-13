import React, { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);

  const validateEmail = (input) => {
    const isValid = /\S+@\S+\.\S+/.test(input);
    setEmailValid(isValid);
    return isValid;
  };

  const validatePassword = (input) => {
    const isValid = input.length >= 8;
    setPasswordValid(isValid);
    return isValid;
  };

  const validateConfirmPassword = (input) => {
    const isValid = input === password;
    setConfirmPasswordValid(isValid);
    return isValid;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === '' || validateEmail(value)) {
      setEmailValid(true);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value === '' || validatePassword(value)) {
      setPasswordValid(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (value === '' || validateConfirmPassword(value)) {
      setConfirmPasswordValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = validateConfirmPassword(confirmPassword);

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      alert('Form submitted successfully');
    } else {
      alert('Can’t submit the form');
    }
  };

  return (
    <div className="App">
      
      <form onSubmit={handleSubmit} className='form_container'>
      <h1 className='heading'>Create Account</h1>
        <div className="form-group">
          <label>Email:</label><br></br>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            className={emailValid ? 'valid' : 'invalid'}
          />
          {!emailValid && <p className="error-message">Invalid email address</p>}
        </div>
        <div className="form-group">
          <label>Password:</label><br></br>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className={passwordValid ? 'valid' : 'invalid'}
          />
          {!passwordValid && <p className="error-message">Password must be at least 8 characters long</p>}
        </div>
        <div className="form-group">
          <label>Confirm Password:</label><br></br>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className={confirmPasswordValid ? 'valid' : 'invalid'}
          />
          {!confirmPasswordValid && <p className="error-message">Passwords do not match</p>}
        </div>
        <button type="submit" className='butt'>Submit</button>
      </form>
    </div>
  );
}
export default App;
