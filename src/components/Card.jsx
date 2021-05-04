import React from 'react';

function Card(props){
    console.log(props);

    return(
        <>
        <div className = 'cards'>
        <div className = 'card'>
            <img src ={props.imgsrc} alt ='' className = "card_img" />

         <div className = 'card_info'>
          <span className = 'card_category'>{props.title}</span>
          <h3 className = 'card_title'>{props.title}</h3>
          <a href = {props.link} target ="">
          <button>Watch now</button>
          </a>
         </div>   
        </div>  
        </div>
       
        </>
    );
    
}

export default Card;