import React from 'react';
import {Card, CardBody, Button} from 'reactstrap';

export const NewExerciseComponent = ({onCreate}) => {
  return (
    <Card inverse style={{ backgroundColor: '#333', borderColor: '#333' }} className="text-center">
      <CardBody>
        <Button onClick={() => onCreate()}>Add exercise</Button>
      </CardBody>
    </Card>
  )
}

export const NewSegmentComponent = ({onCreate}) => {
  return (
    <Card className="text-center">
      <CardBody>
        <Button onClick={() => onCreate()}>Add segment</Button>
      </CardBody>
    </Card>
  )
}
