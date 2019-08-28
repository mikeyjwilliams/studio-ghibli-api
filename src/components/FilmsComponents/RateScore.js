import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function RateScore(props) {
    if(!props.films) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { films } = props;
    const rating  = films.rt_score;
    return (
        <>
            <p>{rating}</p>
        </>
    );
}