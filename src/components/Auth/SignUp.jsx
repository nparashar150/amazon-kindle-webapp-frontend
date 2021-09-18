import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Page from '../Landing-Page/Page';
import axios from 'axios';
import '../Landing-Page/Swipe';
import './Auth.css';
import '../Landing-Page/Swipe';
import { HashLink as Link } from 'react-router-hash-link';

const SignUp = () => {
  let [userSignUp, setUserSignUp] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });
  const handler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserSignUp({ ...userSignUp, [name]: value });
  };
  const formFunc = (event) => {
    event.preventDefault();
    const data = { ...userSignUp };
    axios.post('http://localhost:3320/register', data)
    .then (
      res => {
        console.log(res);
        if(res.status === 200) {
          alert("Login Success");
          const data = JSON.stringify(res.data);
          if(localStorage.getItem('user')) {
            localStorage.clear();
            localStorage.setItem("user", data);
          }
          else {
            localStorage.setItem("user", data);
          }
          setTimeout(() => {
            window.location = '/';
          }, 1500);
        }
    })
    .catch (
        error => {
          console.log(error);
          alert(error);
    });
    
    setUserSignUp({ email: "", password: "", first_name: "", last_name: "" });
  }

  return (
    <>
      <div className="auth-master">
        <div className="dark">
          <Nav />
          <Page />
        </div>
        <div id="box" className="auth-main auth-main-signup">
          <div className="auth">
            <div className="auth-input-box">
              <form action="" method="post" id="AmazonSignUp" onSubmit={formFunc}>
                <input type="text" name="first_name" id="AmazonFirstName" className="AmazonFirstName" placeholder="First Name" autoComplete="off" value={ userSignUp.first_name } onChange={ handler } />
                <input type="text" name="last_name" id="AmazonLastName" className="AmazonLastName" placeholder="Last Name" autoComplete="off" value={ userSignUp.last_name } onChange={ handler } />
                <input type="email" name="email" id="AmazonEmail" className="AmazonEmail" placeholder="example@gmail.com" autoComplete="off" value={ userSignUp.email } onChange={ handler } />
                <input type="password" name="password" id="AmazonPassword" className="AmazonPassword" placeholder="••••••••••••" autoComplete="off" value={ userSignUp.password } onChange={ handler } />
                <div className="reset">Forgot Password?</div>
                <button type="submit" className="ButtonSubmit" >Sign Up</button>
              </form>
              <div className="notSignUp">
                <Link to="/login">
                  Already have an account ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp;
