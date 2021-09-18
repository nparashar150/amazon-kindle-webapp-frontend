import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import Page from '../Landing-Page/Page';
import axios from 'axios';
import '../Landing-Page/Swipe';
import './Auth.css';
import '../Landing-Page/Swipe';
import { HashLink as Link } from 'react-router-hash-link';

const Auth = () => {
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: ""
  });
  const signIn = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUserSignIn({ ...userSignIn, [name]: value });
  };
  const formFunc = (event) => {
    event.preventDefault();
    const data = {...userSignIn};
    axios.post('http://localhost:3320/login', data)
    .then(
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
    });
    setUserSignIn({email: "", password: ""});
  }

  return (
    <>
      <div className="auth-master">
        <div className="dark">
          <Nav />
          <Page />
        </div>
        <div id="box" className="auth-main">
          <div className="auth">
            <div className="auth-input-box">
              <form action="" method="post" id="AmazonSignUp" onSubmit={formFunc}>
                <input type="email" name="email" id="AmazonEmail" className="AmazonEmail" placeholder="example@gmail.com" autoComplete="off" onChange={ signIn } value={ userSignIn.email } />
                <input type="password" name="password" id="AmazonPassword" className="AmazonPassword" placeholder="••••••••••••" autoComplete="off" onChange={ signIn } value={ userSignIn.password }  />
                <div className="reset">Forgot Password?</div>
                <button type="submit" className="ButtonSubmit" >Sign In</button>
              </form>
              <div className="notSignUp">
                <Link to="/signup">
                  Create Account ?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Auth;
