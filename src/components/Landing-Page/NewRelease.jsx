import React, { useState, useEffect  } from 'react';
import axios from 'axios';
import './css/newrelease.css';
const NewRelease = () => {
  let [books, setBooks] = useState([]);
  const api = async () => {
    await axios.get('http://localhost:3030/newdatabooks')
    .then(
      res => {
        // console.log(res);
        setBooks(res.data)
      }
    )
    .catch(
      err => {console.log(err);}
    )
  }
  useEffect(() => {
    api();
  }, []);

  return (
    <>
      {
      books.map((element) => {
        return (
          <div className="new-card-base swiper-slide" key={ element.id }>
              <div className="new-image-base">
              <img alt={ element.title } src={ element.image } id={ element.id } />
            </div>
            <div className="new-card-data">
              <div className="new-card-title"> { element.title } </div>
              <div className="new-card-stats"> { element.author } </div>
              <div className="new-card-stats">{ element.pages } Pages</div>
            </div>
          </div>
        )
      })
    }
    </>
 )
}

export default NewRelease;