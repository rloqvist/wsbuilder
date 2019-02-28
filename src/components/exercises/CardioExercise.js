import React from 'react';
import {Row, Col, Alert} from 'reactstrap';
import {LoadFieldComponent} from './fields/LoadFieldComponent';
import {WorkFieldComponent} from './fields/WorkFieldComponent';
import {suffices} from '../../constants';

const DisplayExercise = args => {
  return (
    <>
      <Alert color="secondary">
        <Row>
          <Col md={6}>{args.load.value} {suffices[args.load.type]}</Col>
          <Col md={6}>{args.work.value} {suffices[args.work.type]}</Col>
        </Row>
      </Alert>
    </>
  )
}

const EditExercise = args => {
  return (
    <>
      <LoadFieldComponent {...args} />
      <WorkFieldComponent {...args} />
    </>
  )
}

export const CardioExercise = args => {
  if (args.editing) {
    return <EditExercise {...args} />
  } else {
    return <DisplayExercise {...args} />
  }
}
