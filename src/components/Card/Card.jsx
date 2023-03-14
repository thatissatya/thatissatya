import React from 'react'

export const Card = (props) => {
    return (
        <div className="card" id={props.id}>
            <img src={props.url} alt="html" />
            <h2>{props.name}</h2>
        </div>
    )
}

