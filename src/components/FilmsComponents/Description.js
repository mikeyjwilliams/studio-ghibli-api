import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Description(props) {
    if(!props.film) return (
        <Segment>
            <Dimmer active inverted>
                <Loader>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { film } = props;
    const  description  = film.description;
   
    return (
       <>
        <p>{description}</p>
       </> 
    );
}