import React  from 'react';

import './App.css';
import MovieCard from './moviecard';



const MovieSearch=({news})=> {
   
 return (
<div className="container">            
    <div className="list-container">
     {news.map((el,index)=><MovieCard  item={el} Key={index}/>
     
    )}
  
 </div>
 </div>
 );
  
}


export default MovieSearch;