import React from 'react';
import { Dimmer, Loader, Segment } from 'semantic-ui-react';

export function ReleaseDate(props) {
    if(!props.release_date) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    );
    const { releaseDate } = props.release_date;
    return (
        <>
            <p>{releaseDate}</p>
        </>
    )
}