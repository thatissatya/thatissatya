import React from 'react'
import './card.css'
export const Card = (props) => {
    return (
        <div className="card" id={props.id} key={props.id}>
            <img src={props.url} alt={props.name} />
            <div className='card-header'>{props.name}</div>
        </div>
    )
}

