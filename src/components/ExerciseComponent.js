import React, {Component} from 'react';
import {CardTitle, CardSubtitle, CardText, Button, Input, FormGroup, Row, Col} from 'reactstrap';
import ReactMde from "react-mde";
import {SelectExerciseTypeComponent} from './exercises/SelectExerciseTypeComponent';
import {Exercises} from './exercises'
import {EXERCISE_TYPES} from '../constants';
import "react-mde/lib/styles/css/react-mde-all.css";
import styled from 'styled-components';

const WrapMarkdown = styled.div`
  img {
    max-width: 100%;
  }
`;


const DisplayExercise = args => {
  return (
    <>
      <CardTitle><h4>{args.title}<Button color="link" onClick={() => args.onDelete(args.id)}>delete</Button></h4></CardTitle>
      <CardSubtitle><b>{EXERCISE_TYPES[args.exerciseType]}</b></CardSubtitle>
      <WrapMarkdown><CardText dangerouslySetInnerHTML={{"__html": args.html}}></CardText></WrapMarkdown>

      {args.children}
    </>
  )
}

const EditExercise = args => {
  return (
    <>
      <Row form>
        <Col md={10}>
          <FormGroup>
            <Input
              placeholder="Name your exercise"
              defaultValue={args.title}
              onChange={event => args.onSetTitle(event.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <SelectExerciseTypeComponent {...args} />
          </FormGroup>
        </Col>
      </Row>

      {args.children}

      <FormGroup>
        <ReactMde
          value={args.description}
          onChange={args.onSetDescription}
        />
      </FormGroup>
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
