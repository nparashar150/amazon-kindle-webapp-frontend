import React from 'react';
import './User.css';

const data = localStorage.getItem('user');
const user = JSON.parse(data);

const User = () => {
  return (
    <>
      <a href={ user.first_name } rel="noreferrer" target="_blank">
        <div className="user-box">
          <div className="user-data-info">
            <div className="user-name">{ user.first_name + " " + user.last_name }</div>
          </div>
        </div>
      </a>
    </>
  )
}

export default User;

