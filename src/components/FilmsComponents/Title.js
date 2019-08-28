import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Title(props) {
    if(!props.films) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    );
        const { films } = props;
        const  title  = films.title;
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}