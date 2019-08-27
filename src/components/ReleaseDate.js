import React from 'react';

export function ReleaseDate(props) {
    if(!props.release_date) return (
        <p>Loading Release Date...</p>
    );
    const { releaseDate } = props.release_date;
    return (
        <>
            <p>{releaseDate}</p>
        </>
    )
}