import React, {Component} from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input, Form, FormGroup, Col, Label } from 'reactstrap';
import {SelectExerciseTypeComponent} from './SelectExerciseTypeComponent';
import {SelectWorkTypeComponent} from './SelectWorkTypeComponent';
import {LoadFieldComponent} from './fields/LoadFieldComponent';
import {WorkFieldComponent} from './fields/WorkFieldComponent';
import {RoundsFieldComponent} from './fields/RoundsFieldComponent';

const DisplayExercise = args => {
  console.log("DisplayExercise args:", args);
  return (
    <>
      <CardTitle><h4>{args.title}<Button color="link" onClick={() => args.onDelete(args.id)}>delete</Button></h4></CardTitle>
      <CardSubtitle><b>{args.exerciseType}</b></CardSubtitle>
      <CardText><i>{args.description}</i></CardText>
    </>
  )
}

const EditExercise = args => {
  return (
    <>
      <FormGroup>
        <Input placeholder="Name your exercise" defaultValue={args.title} />
      </FormGroup>

      <FormGroup>
        <SelectExerciseTypeComponent {...args} />
      </FormGroup>

      <FormGroup>
        <Input type="textarea" defaultValue={args.description} />
      </FormGroup>

      <LoadFieldComponent {...args} />

      <WorkFieldComponent {...args} />

      <RoundsFieldComponent {...args} />
    </>
  )
}

export class PlainExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    if (this.props.editing) {
      return <EditExercise {...this.props} />
    }
    return <DisplayExercise {...this.props} />
  }
}
