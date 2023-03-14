import React from 'react'
import './card.css'
export const Card = (props) => {
    return (
        <div className="card" id={props.id}>
            <img src={props.url} alt={props.name} />
            <h2>{props.name}</h2>
        </div>
    )
}

