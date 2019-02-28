import React, {Component} from 'react';
import {CardTitle, CardSubtitle, CardText, Button, Input, FormGroup, Row, Col, Alert} from 'reactstrap';
import {SelectExerciseTypeComponent} from './SelectExerciseTypeComponent';
import {LoadFieldComponent} from './fields/LoadFieldComponent';
import {WorkFieldComponent} from './fields/WorkFieldComponent';
import {RoundsFieldComponent} from './fields/RoundsFieldComponent';
import {RestFieldComponent} from './fields/RestFieldComponent';
import {suffices} from '../../constants';
import ReactMde from "react-mde";
import "react-mde/lib/styles/css/react-mde-all.css";

const DisplayExercise = args => {
  console.log("DisplayExercise args:", args);
  return (
    <>
      <CardTitle><h4>{args.title}<Button color="link" onClick={() => args.onDelete(args.id)}>delete</Button></h4></CardTitle>
      <CardSubtitle><b>{args.exerciseType}</b></CardSubtitle>
      <CardText dangerouslySetInnerHTML={{"__html": args.html}}></CardText>
      <Alert color="secondary">
        <Row>
          <Col md={4}>{args.load.value} {suffices[args.load.type]}</Col>
          <Col md={4}>{args.work.value} {suffices[args.work.type]}</Col>
          <Col md={4}>{args.rounds} rounds</Col>
        </Row>
      </Alert>
    </>
  )
}

const EditExercise = args => {
  return (
    <>
      <FormGroup>
        <Input
          placeholder="Name your exercise"
          defaultValue={args.title}
          onChange={event => args.onSetTitle(event.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <SelectExerciseTypeComponent {...args} />
      </FormGroup>

      <FormGroup>
        <ReactMde
          value={args.description}
          onChange={args.onSetDescription}
        />
      </FormGroup>

      <LoadFieldComponent {...args} />

      <WorkFieldComponent {...args} />

      <RoundsFieldComponent {...args} />

      <RestFieldComponent {...args} />
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
