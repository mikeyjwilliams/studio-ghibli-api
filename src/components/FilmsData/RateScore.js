import React from 'react';

export function RateScore(props) {
    if(!props.rt_score) return (
        <p>Loading rating...</p>
    )
    const { rating } = props.rt_score;
    return (
        <>
            <p>{rating}</p>
        </>
    );
}