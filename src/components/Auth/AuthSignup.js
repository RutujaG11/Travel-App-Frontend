import "./Auth.css"
import { useAuth } from "../../context";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../utils";
import { signupHandler } from "../../services";

let isNumberValid,
  isNameValid,
  isEmailValid,
  isPasswordValid,
  isConfirmPasswordValid;
export const AuthSignup = () => {
  const {username,email,number,password,ConfirmPassword,authDispatch}=useAuth()
  console.log({username,email,number,password,ConfirmPassword})
  const handleNumberChange=(event)=>{
     isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  }
  const handleNameChange=(event)=>{
     isNameValid = validateName(event.target.value);
    if (isNameValid) {
      console.log("Valid Input");
      authDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  }
  const handleEmailChange=(event)=>{
     isEmailValid = validateEmail(event.target.value);
    if (isEmailValid) {
      console.log("Valid Input");
      authDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Email");
    }
  }
  const handlePasswordChange=(event)=>{
     isPasswordValid = validatePassword(event.target.value);
    if (isPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  }
  const handleConfirmPasswordChange=(event)=>{
     isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      console.log("Valid Input");
      authDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Confirm Password");
    }
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    
    
    if (
      isNumberValid &&
      isNameValid &&
      isEmailValid &&
      isPasswordValid &&
      isConfirmPasswordValid
    ) {
      signupHandler(username, number, email, password);
    }
    authDispatch({
      type: "CLEAR_USER_DATA",
    });
    authDispatch({
      type: "SET_TO_LOGIN",
    });
  };
    return (
      <div className="auth-container">
        <form onSubmit={handleFormSubmit}>
          <div className="d-flex direction-column lb-in-container">
            <label className="auth-label">
              Mobile Number<span className="asterik">*</span>
            </label>
            <input
              defaultValue={number}
              className="auth-input"
              placeholder="Enter Mobile Number"
              maxLength="10"
              type="number"
              required
              onChange={handleNumberChange}
            />
          </div>
          <div className="d-flex direction-column lb-in-container">
            <label className="auth-label">
              Name<span className="asterik">*</span>
            </label>
            <input
            defaultValue={username}
              className="auth-input"
              placeholder="Enter Name"
            
              required
              onClick={handleNameChange}
            />
          </div>
          <div className="d-flex direction-column lb-in-container">
            <label className="auth-label">
              Email<span className="asterik">*</span>
            </label>
            <input
            defaultValue={email}
              className="auth-input"
              placeholder="Email"
              type="email"
              required
              onClick={handleEmailChange}
            />
          </div>
          <div className="d-flex direction-column lb-in-container">
            <label className="auth-label">
              Password<span className="asterik">*</span>
            </label>
            <input
            defaultValue={password}
              className="auth-input"
              placeholder="Enter Password"
              type="password"
              required
              onClick={handlePasswordChange}
            />
          </div>
          <div className="d-flex direction-column lb-in-container">
            <label className="auth-label">
             Confirm Password<span className="asterik">*</span>
            </label>
            <input
            defaultValue={ConfirmPassword}
              className="auth-input"
              placeholder="Confirm Password"
              type="password"
              required
              onClick={handleConfirmPasswordChange}
            />
          </div>
          <div>
            <button className="button btn-primary btn-login cursor">Sign Up</button>
          </div>
        </form>
        
      </div>
    );
  };
  