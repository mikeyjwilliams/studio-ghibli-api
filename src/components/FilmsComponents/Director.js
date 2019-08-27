import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Director(props) {
    if(!props.director) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { director } = props.director;
    return (
        <>
        <p>Directed By: {director}</p>
        </>
    )
}