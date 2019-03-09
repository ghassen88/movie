import React from 'react';
import './App.css';
import './MovieCard.css';

const MovieCard = ({item}) => {
    return (
  <div className="">
        
 
     <div className="card">
  <img src={item.image} class="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-text">{item.titre}</p>
  </div>

     </div>
     </div>
  
    );
};

export default MovieCard;