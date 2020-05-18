import React from 'react';

const Character = props => {

    return (
        <li key = {props.index}>
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            <p>{props.birth}</p>
            <p>{props.hair}</p>
            <p>{props.skin}</p>
            <p>{props.eyes}</p>
        </li>
    )

}

export default Character;