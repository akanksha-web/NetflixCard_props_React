import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import Card from './components/Card';
import Sdata from './components/Sdata';


ReactDOM.render(
    <>
   
   <h1 className ="heading_style">List Of 8 Netflix Show</h1>
   {Sdata.map((val) =>{
     return(
       <Card 
       imgsrc = {val.imgsrc}
       title = {val.title}
       sname = {val.sname}
       link = {val.links}
       />
     );
   })}
    </>,
  document.getElementById('root')
);

