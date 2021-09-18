import React from 'react';
import Card from './Card';
// import User from '../User/User';
import NewRelease from './NewRelease';
import Footer from './Footer';
import './css/page.css';
import slideit from './Swipe';

const Page = () => {
  return (
    <div className="page">
      <div className="book-stats-heading">Books you read last</div>
      <div className="user-data">
        {/* <User /> */}
      </div>
      <div className="Box">
        <div onLoad={ slideit } id="cardBox" className="card-box">
          <Card />
        </div>
        <div className="new-books">
          <div className="book-stats-heading">New Releases</div>
          <div id="cardBox" className="new-card-box">
            <NewRelease  />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
} 

export default Page;