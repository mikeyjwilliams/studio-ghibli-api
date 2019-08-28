import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';


export function ReleaseDate(props) {
    if(!props.film) return (
        <Segment>
            <Dimmer active inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
        </Segment>
    );
    const { film } = props;
    const releaseDate  = film.release_date;
    return (
        <>
            <p>Released: {releaseDate}</p>
        </>
    )
}