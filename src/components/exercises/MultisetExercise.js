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
              <Col md={6}>{args.rounds} rounds</Col>
              <Col md={6}>{args.rest} seconds rest</Col>
            </>
          ) : (
            <>
              <Col md={12}>{args.rounds} rounds</Col>
            </>
          )}
        </Row>
      </Alert>
    </>
  )
}

const EditExercise = args => {
  return (
    <Row form>
      <RoundsFieldComponent {...args} />
      <RestFieldComponent {...args} />
    </Row>
  )
}

export const MultisetExercise = args => {
  if (args.editing) {
    return <EditExercise {...args} />
  } else {
    return <DisplayExercise {...args} />
  }
}
