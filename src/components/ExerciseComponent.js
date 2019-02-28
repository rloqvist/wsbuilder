import React, {Component} from 'react';
import {CardTitle, CardSubtitle, CardText, Button, Input, FormGroup, Row, Col, Alert} from 'reactstrap';
import ReactMde from "react-mde";
import {SelectExerciseTypeComponent} from './exercises/SelectExerciseTypeComponent';
import {Exercises} from './exercises'

const DisplayExercise = args => {
  return (
    <>
      <CardTitle><h4>{args.title}<Button color="link" onClick={() => args.onDelete(args.id)}>delete</Button></h4></CardTitle>
      <CardSubtitle><b>{args.exerciseType}</b></CardSubtitle>
      <CardText dangerouslySetInnerHTML={{"__html": args.html}}></CardText>

      {args.children}
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

      {args.children}
    </>
  )
}

export class ExerciseComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const Exercise = Exercises[this.props.exerciseType];
    if (this.props.editing) {
      return <EditExercise {...this.props}><Exercise editing {...this.props} /></EditExercise>
    }
    return <DisplayExercise {...this.props}><Exercise {...this.props} /></DisplayExercise>
  }
}
