import React, {Component} from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import {Container, Col, Row, Button, Input} from 'reactstrap';
import {NewSegmentComponent, NewExerciseComponent} from './NewComponents';
import {ExerciseContainer} from './ExerciseContainer';
import {store} from '../store';
import {samplePlainExercise} from '../utils';

const StyledSegmentWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  background: #e2e3e5;
  border-top: 10px solid white;
`

export class SegmentContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: store.build.filter(item => item.parentId === this.props.id) || [],
      editing: false,
      title: this.props.title,
    }
  }

  countExercises = () => {''
    const exercises = this.state.content.filter(block => block.type === "exercise") || [];
    return exercises.length + 1;
  }

  handleAddExercise = () => {
    const title = `${this.props.title} - Exercise ${this.countExercises()}`;

    const newExercise = {...samplePlainExercise(title, this.props.id)}

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

  toggleEditTitle = () => {
    this.setState({editing: !this.state.editing});
  }

  handleSetTitle = title => {
    store.updateItem({id: this.props.id, key: "title", value: title})
    this.setState({title});
  }

  render() {
    const {content, editing} = this.state;
    return (
      <Container>
        <StyledSegmentWrapper>


          <h3>
            {editing ? (
              <>
                <Input
                  placeholder="Section title"
                  defaultValue={this.state.title}
                  onChange={event => this.handleSetTitle(event.target.value)}
                />
                <Button color="link" onClick={this.toggleEditTitle}>finished editing</Button>
              </>
            ) : (
              <>
                {this.state.title}
                {this.props.parentId &&
                  <>
                    <Button color="link" onClick={this.toggleEditTitle}>edit title</Button>
                    <Button color="link" onClick={() => this.props.onDelete(this.props.id)}>delete</Button>
                  </>
                }
              </>
            )}
          </h3>


          {content.length !== 0 ? content.map(block => {
            if (block.type === "segment") {
              return <SegmentContainer key={block.id} {...block} onDelete={this.handleDelete} />
            }
            return <ExerciseContainer key={block.id} {...block} onDelete={this.handleDelete} />
          }) : <div><h5><i>No content in this segment yet.</i></h5></div>}


          {!!this.props.parentId ? (
            <Row>
              <Col sm="6">
                <NewExerciseComponent onCreate={this.handleAddExercise} />
              </Col>
              <Col sm="6">
                <NewSegmentComponent onCreate={this.handleAddSegment} />
              </Col>
            </Row>
          ) : <NewSegmentComponent onCreate={this.handleAddSegment} />}


        </StyledSegmentWrapper>
      </Container>
    )
  }
}
