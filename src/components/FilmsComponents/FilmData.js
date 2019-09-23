import React from 'react';
import { Card, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

function FilmData() {
  // const { title, director, release_date, description, rt_score } = props;
  return (
    <Card>
      <Card.Content>
        <Card.Header>Castle in the sky</Card.Header>
        <Card.Meta>
          <p>Directed by: Hayo</p>
          <p>Released: 1986</p>
        </Card.Meta>
        <Card.Description>description....</Card.Description>
        <Card.Content extra>
          <Icon name='checkmark' /> score: 95
        </Card.Content>
      </Card.Content>
    </Card>
  );
}

export default FilmData;
