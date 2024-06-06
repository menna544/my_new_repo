import  { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import imeg from '../../Images/download (5).jpg';
import '../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Signup = () => {
  const navigate = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false); 

  const handleSignUp = (e) => {
    e.preventDefault();
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation checks for email and password
    if (!email || !emailPattern.test(email)) {
      setEmailError('Enter a valid email address');
      return;
    } else {
      setEmailError('');
    }
    if (!password || password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      return;
    } else {
      setPasswordError('');
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      return;
    } else {
      setConfirmPasswordError('');
    }
  
    // Check if an account with the same email already exists
    const existingEmail = localStorage.getItem('userEmail');
    if (existingEmail === email) {
      setEmailError('An account with this email already exists');
      return;
    }
  
    // If not, proceed with storing the new account data
    localStorage.setItem('userEmail', email);
    localStorage.setItem('password', password);
    navigate('/Home', { state: { userEmail: email } });
  };
  
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const back = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('password');
    navigate('/Startlog'); 
  };

  const handleLogin = () => {
    navigate('/Signin');
  };

  return (
    <div className="App">
      <FontAwesomeIcon icon={faArrowLeft} className="arrow" onClick={back} />
      <div className="page7">
        <div className="cont6">
          <img src={imeg} alt='Imeg' />
          <h1>Create an account</h1>
          <div className="input-container">
            <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
          </div>
          {emailError && <p className="error-message">{emailError}</p>}
          <div className="input-container">
            <input
              type={passwordVisible ? "text" : "password"} 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="input-icon" onClick={togglePasswordVisibility} />
          </div>
          {passwordError && <p className="error-message">{passwordError}</p>}
          <div className="input-container">
            <input
              type={passwordVisible ? "text" : "password"} 
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} className="input-icon" onClick={togglePasswordVisibility} />
          </div>
          {confirmPasswordError && <p className="error-message">{confirmPasswordError}</p>}
          <button onClick={handleSignUp}>Get Started</button>
          <h4 className="signup">
            Already have an account? <span className="sign1" onClick={handleLogin}>Sign in</span>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Signup;
