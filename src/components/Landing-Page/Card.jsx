import React, { useState, useEffect } from 'react';
import './css/card.css';

const Card = () => {

  let [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await fetch('http://localhost:3030/databooks');
    setBooks(await response.json());
  }

  useEffect(() => {
    getBooks();
  }, []);

  return(
    <>
    {
      books.map((element, index) => {
        return (
          // <SwiperSlide key={ element.id }>
            <div className="card-base swiper-slide" key={ index }>
              <div className="image-base">
                <a rel="noreferrer" href={ element.link } target="_blank">
                  <img alt={ element.name } src={ element.image } id={ index } />
                </a>
              </div>
              <div className="card-data">
                <div className="card-title"> { element.name } </div>
                <div className="card-stats">{ element.statspages } - { element.statschapter } - Last Read</div>
              </div>
            </div>
          // </SwiperSlide>
        )
      })
    }
    </>
  )
}

export default Card;