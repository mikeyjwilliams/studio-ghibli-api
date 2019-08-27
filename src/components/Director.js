import React from 'react';

export function Director(props) {
    if(!props.director) return (
        <h4>Loading Director...</h4>
    )
    const { director } = props;
    return (
        <>
        <p>Directed By: {director}</p>
        </>
    )
}