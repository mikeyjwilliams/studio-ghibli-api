import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Description(props) {
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
        <p>{director}</p>
       </> 
    );
}