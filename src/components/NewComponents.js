import React from 'react';
import styled from 'styled-components';
import { Card, CardText, CardBody, Button } from 'reactstrap';

export const NewExerciseComponent = ({onCreate}) => {
  return (
    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="text-center">
      <CardBody>
        <CardText>Click to add a simple exercise. This can either be multiset, cardio or whatever you like.</CardText>
        <Button onClick={() => onCreate()}>Add exercise</Button>
      </CardBody>
    </Card>
  )
}

export const NewSegmentComponent = ({onCreate}) => {
  return (
    <Card className="text-center">
      <CardBody>
        <CardText>Click to add a segment. This can consist of multiple exercises or other segments.</CardText>
        <Button onClick={() => onCreate()}>Add segment</Button>
      </CardBody>
    </Card>
  )
}
