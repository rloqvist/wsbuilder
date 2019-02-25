import React, {Component} from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Container, Col, Row, Card } from 'reactstrap';
import {NewSegmentComponent, NewExerciseComponent} from './NewComponents';
import {ExerciseContainer} from './ExerciseContainer';

const StyledSegmentWrapper = styled.div`
  padding: 10px 0;
`

export class SegmentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content || [],
    }
  }

  countExercises = () => {
    const exercises = this.state.content.filter(block => block.type === "exercise") || [];
    return exercises.length + 1;
  }

  handleAddExercise = () => {
    const newExercise = {
      id: shortid(),
      title: `${this.props.title} - Exercise ${this.countExercises()}`,
      type: "exercise",
      exerciseType: "PlainExercise",
      description: "Replace this description with something for your exercise",
      content: [],
    }

    this.setState({
      content: [...this.state.content, newExercise],
    })
  }

  countSegments = () => {
    const segments = this.state.content.filter(block => block.type === "segment") || [];
    return segments.length + 1;
  }

  handleAddSegment = () => {
    const newSegment = {
      id: shortid(),
      title: `${this.props.title} - Segment ${this.countSegments()}`,
      type: "segment",
      description: "Replace this description with something for your segment",
      content: [],
    }

    this.setState({
      content: [...this.state.content, newSegment],
    })
  }

  render() {
    const content = this.state.content
    return (
      <Container>
        <StyledSegmentWrapper>
          {this.props.title}
          {content.length !== 0 && content.map(block => {
            if (block.type === "segment") {
              return <SegmentContainer {...block} />
            }
            return <ExerciseContainer {...block} />
          })}
          <Row>
            <Col sm="6">
              <NewExerciseComponent action={this.handleAddExercise} />
            </Col>
            <Col sm="6">
              <NewSegmentComponent action={this.handleAddSegment} />
            </Col>
          </Row>
        </StyledSegmentWrapper>
      </Container>
    )
  }
}
