import React, {Component} from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Container, Col, Row, Card, Button } from 'reactstrap';
import {NewSegmentComponent, NewExerciseComponent} from './NewComponents';
import {ExerciseContainer} from './ExerciseContainer';
import {store} from '../store';

const StyledSegmentWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background: #e2e3e5;
`

export class SegmentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: store.build.filter(item => item.parentId === this.props.id) || [],
    }
  }

  countExercises = () => {''
    const exercises = this.state.content.filter(block => block.type === "exercise") || [];
    return exercises.length + 1;
  }

  handleAddExercise = () => {
    const newExercise = {
      id: shortid(),
      parentId: this.props.id,
      title: `${this.props.title} - Exercise ${this.countExercises()}`,
      type: "exercise",
      exerciseType: "PlainExercise",
      load: {
        type: "WEIGHT",
        value: 20,
      },
      work: {
        type: "REPETITIONS",
        value: 10,
      },
      rounds: 3,
      description: "Replace this description with something for your exercise",
      content: [],
    }

    this.setState({
      content: [...this.state.content, newExercise],
    })

    store.createItem(newExercise);
  }

  countSegments = () => {
    const segments = this.state.content.filter(block => block.type === "segment") || [];
    return segments.length + 1;
  }

  handleAddSegment = async () => {
    const newSegment = {
      id: shortid(),
      parentId: this.props.id,
      title: `${this.props.title} - Segment ${this.countSegments()}`,
      type: "segment",
      description: "Replace this description with something for your segment",
      content: [],
    }

    await this.setState({
      content: [...this.state.content, newSegment],
    })

    store.createItem(newSegment);
  }

  handleDelete = id => {
    store.deleteItem(id)

    this.setState({
      content: this.state.content.filter(item => item.id !== id),
    })
  }

  render() {
    const content = this.state.content;
    return (
      <Container>
        <StyledSegmentWrapper>
          <h3>
            {this.props.title}
            {this.props.parentId &&
              <Button color="link" onClick={() => this.props.onDelete(this.props.id)}>delete</Button>
            }
          </h3>
          {content.length !== 0 ? content.map(block => {
            if (block.type === "segment") {
              return <SegmentContainer key={block.id} {...block} onDelete={this.handleDelete} />
            }
            return <ExerciseContainer key={block.id} {...block} onDelete={this.handleDelete} />
          }) : <div><h5><i>No content in this segment yet.</i></h5></div>}
          <Row noGutters>
            <Col sm="6">
              <NewExerciseComponent onCreate={this.handleAddExercise} />
            </Col>
            <Col sm="6">
              <NewSegmentComponent onCreate={this.handleAddSegment} />
            </Col>
          </Row>
        </StyledSegmentWrapper>
      </Container>
    )
  }
}
