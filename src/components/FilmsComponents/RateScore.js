import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function RateScore(props) {
    if(!props.film) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { film } = props;
    const rating  = film.rt_score;
    return (
        <>
            <p>{rating}</p>
        </>
    );
}