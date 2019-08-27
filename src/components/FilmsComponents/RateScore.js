import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function RateScore(props) {
    if(!props.rt_score) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { rating } = props.rt_score;
    return (
        <>
            <p>{rating}</p>
        </>
    );
}