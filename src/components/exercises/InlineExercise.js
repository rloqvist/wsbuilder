import React from 'react';
import {Row, Col, Alert} from 'reactstrap';
import {LoadFieldComponent} from './fields/LoadFieldComponent';
import {WorkFieldComponent} from './fields/WorkFieldComponent';
import {RoundsFieldComponent} from './fields/RoundsFieldComponent';
import {RestFieldComponent} from './fields/RestFieldComponent';
import {suffices} from '../../constants';

const DisplayExercise = args => {
  return (
    <>
      <Alert color="secondary">
        <Row>
          {!!args.rest ? (
            <>
              <Col md={4}>{args.load.value} {suffices[args.load.type]}</Col>
              <Col md={4}>{args.work.value} {suffices[args.work.type]}</Col>
              <Col md={4}>{args.rest} seconds rest</Col>
            </>
          ) : (
            <>
              <Col md={6}>{args.load.value} {suffices[args.load.type]}</Col>
              <Col md={6}>{args.work.value} {suffices[args.work.type]}</Col>
            </>
          )}
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
      <RestFieldComponent {...args} />
    </>
  )
}

export const InlineExercise = args => {
  if (args.editing) {
    return <EditExercise {...args} />
  } else {
    return <DisplayExercise {...args} />
  }
}
