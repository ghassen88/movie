import React, { Component } from 'react';
import MovieSearch from './movielist';
import Search from './search'

import './App.css';


const thecards=[
    {
        image:"http://culturaddict.com/wp-content/uploads/2016/06/Dalton-Trumbo-150x150.jpg" ,
        titre:'warsaw',
      
    },
    {
        image:"https://static.fnac-static.com/multimedia/Images/FR/NR/bf/1f/9d/10297279/1539-1/tsp20181030110134/Legendes-du-cinema-francais.jpg" ,
      titre:"istanbul"
    },
    {
        image:"http://aws-cf.imdoc.fr/prod/avatars/3/3/7/10918337/2101813/tns1-2101813.jpg?v=1" ,
        titre:'Istanbul',
   
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNjRZzFUpY-zoEqKltKvXTLJrlsQpgYufqTr4_XjCMaT7qj7paUw",
        titre:'Rome',
     
    },
    {
        image:"https://i1.wp.com/www.stephenking999.com/wp-content/uploads/2010/03/png_misery.png?resize=150%2C150&ssl=1" ,
        titre:'Mexico city',
      
    },
    {
        image:"http://beaunefestivalpolicier.com/wp-content/uploads/2017/11/TARIK-SALEH.png" ,
        titre:'Curtiba',
       
    },
    {
        image:"https://i1.wp.com/www.stephenking999.com/wp-content/uploads/2010/03/png_misery.png?resize=150%2C150&ssl=1" ,
        titre:'Mexico city',
      
    },
    {
        image:"http://beaunefestivalpolicier.com/wp-content/uploads/2017/11/TARIK-SALEH.png" ,
        titre:'Curtiba',
       
    },
    

]

class App extends Component {
  constructor(props){
    super(props)
      this.state={
   news:thecards,
   filtred:thecards  
      }
    }
  serach=(keyword)=>{
    console.log(keyword)
    let filter1=this.state.news.filter((el,i)=>{return el.titre.toLocaleLowerCase().indexOf(keyword)>-1})
    this.setState({filtred:filter1})
  }
  render() {
    return (
      <div className="App">
      <Search searchname={(keyword)=>this.serach(keyword)}/>
      <br/>
        <MovieSearch news={this.state.filtred}/>
      
      </div>
    );
  }
}

export default App;
