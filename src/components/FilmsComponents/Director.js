import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Director(props) {
    if(!props.film) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { film } = props;
    const  director = film.director;
    return (
        <>
        <p>Directed By: {director}</p>
        </>
    )
}