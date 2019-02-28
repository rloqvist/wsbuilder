import React, {Component} from 'react';
import {Row, Col, Alert} from 'reactstrap';
import {SelectExerciseTypeComponent} from './SelectExerciseTypeComponent';
import {LoadFieldComponent} from './fields/LoadFieldComponent';
import {WorkFieldComponent} from './fields/WorkFieldComponent';
import {RoundsFieldComponent} from './fields/RoundsFieldComponent';
import {RestFieldComponent} from './fields/RestFieldComponent';
import {suffices} from '../../constants';
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

const DisplayExercise = args => {
  return (
    <>
      <Alert color="secondary">
        <Row>
          {!!args.rest ? (
            <>
              <Col md={3}>{args.load.value} {suffices[args.load.type]}</Col>
              <Col md={3}>{args.work.value} {suffices[args.work.type]}</Col>
              <Col md={3}>{args.rounds} rounds</Col>
              <Col md={3}>{args.rest} seconds rest</Col>
            </>
          ) : (
            <>
              <Col md={4}>{args.load.value} {suffices[args.load.type]}</Col>
              <Col md={4}>{args.work.value} {suffices[args.work.type]}</Col>
              <Col md={4}>{args.rounds} rounds</Col>
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
      <RoundsFieldComponent {...args} />
      <RestFieldComponent {...args} />
    </>
  )
}

export const PlainExercise = args => {
  if (args.editing) {
    return <EditExercise {...args} />
  } else {
    return <DisplayExercise {...args} />
  }
}
