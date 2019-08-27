import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Description(props) {
    if(!props.films.description) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { description } = props.films.description;
    return (
       <>
        <p>{description}</p>
       </> 
    );
}