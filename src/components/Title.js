import React from 'react';

export function Title(props) {
    if(!props.films) return (
        <h1>Loading Film Title...</h1>
    );
        const { title } = props;
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}