import React from 'react';
function Card(props){
    return(
        <div className='cards'>
            <div className='card'>
                <img src={props.imgsrc} alt='mypic' className='card_img'/>
                <div className="card_info">
                    <span className='card_category'>{props.name}</span>
                    <h3 className='card_title'>{props.state}</h3>
                    <a href={props.link} target="_blank">
                        <button>Know More</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;