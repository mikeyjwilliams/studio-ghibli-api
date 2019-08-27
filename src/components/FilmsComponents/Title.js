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
        const { title } = props.title;
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}