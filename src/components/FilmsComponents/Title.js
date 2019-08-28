import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function Title(props) {
    if(!props.film) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    );
        const { film } = props;
        const  title  = film.title;
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}