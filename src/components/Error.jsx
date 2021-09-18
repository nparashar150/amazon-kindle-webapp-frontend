import React from 'react'
import './Landing-Page/css/error.css';

const Error = () => {
  const errorInit = () => {
    let time = 3;
    const Error = document.getElementById('Error');
    Error.innerText = `Aww Snap, Page not found. Redirecting in ${ time } seconds...`;
    errorRedirect()
  }
  const errorRedirect = () => {
    let time = setTimeout(function () {
        window.location.href = "/";
        window.clearTimeout(time);
    }, 3000);
  }
  window.onload = errorInit;
  return (
    <div className="Error" id="Error" >
    </div>
  )
}

export default Error;
