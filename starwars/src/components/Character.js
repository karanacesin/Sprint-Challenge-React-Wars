import React from 'react';
import Swcard from './card';

const Character = props => {

    return (
        <Swcard>
            <h2>{props.name}</h2>
            <p>{props.gender}</p>
            <p>{props.birth}</p>
            <p>{props.hair}</p>
            <p>{props.skin}</p>
            <p>{props.eyes}</p>
        </Swcard>
    )

}

export default Character;