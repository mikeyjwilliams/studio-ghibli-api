import React from 'react';
import { Dimmer, Loader, Segment, Card } from 'semantic-ui-react';
import { Title } from './FilmsComponents/Title';
import { Director } from './FilmsComponents/Director';
import { ReleaseDate } from './FilmsComponents/ReleaseDate';
import { RateScore } from './FilmsComponents/RateScore';
import { Description } from './FilmsComponents/Description';

export function Films(props) {
    if (!props.films) return (
        <Segment>
            <Dimmer active>
                <Loader inverted>Loading...</Loader>
            </Dimmer>
        </Segment>
    )
    const { films } = props;
   
    return (
        <div>
            <Card.Group>
            {films.map((film) => {
                return (
                
                <Card key={film.id}
                header= 'Studio Ghibli'
                    meta= <ReleaseDate film={film} key={film.id + 'r'} />  
                description =<Description film={film} key={film.id + 'd'} />
                />
            )})
            }
            </Card.Group>
                
                
        </div>
    )
}

// card component holding.
  // title
  // director
  // release_date
  // rt_score
  // description