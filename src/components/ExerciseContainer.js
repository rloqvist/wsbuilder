import React, {Component} from 'react';
import styled from 'styled-components';
import {Card, CardBody, Button, ButtonGroup, Form} from 'reactstrap';
import * as Showdown from "showdown";
import {store} from '../store';
import {ExerciseComponent} from './ExerciseComponent';
import {NewExerciseComponent} from './NewComponents';
import {sampleCardioExercise, sampleInlineExercise} from '../utils';

const InnerExercise = styled.div`
  padding: 0 40px;
`

const StyledExerciseWrapper = styled.div`
  padding: 10px 0;
`

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

export class ExerciseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      ...this.props,
      content: store.build.filter(item => item.parentId === this.props.id) || [],
    }
  }

  componentWillMount = async () => {
    const html = await converter.makeHtml(this.props.description)
    this.setState({html})
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  handleSetTitle = title => {
    store.updateItem({id: this.props.id, key: "title", value: title})
    this.setState({title});
  }

  handleSetDescription = async description => {
    store.updateItem({id: this.props.id, key: "description", value: description})
    const html = await converter.makeHtml(description)
    this.setState({description, html});
  }

  handleSetExerciseType = exerciseType => {
    store.updateItem({id: this.props.id, key: "exerciseType", value: exerciseType})
    this.setState({exerciseType});
  }

  handleSetLoad = load => {
    store.updateItem({id: this.props.id, key: "load", value: load})
    this.setState({load});
  }

  handleSetWork = work => {
    store.updateItem({id: this.props.id, key: "work", value: work})
    this.setState({work});
  }

  handleSetRounds = rounds => {
    store.updateItem({id: this.props.id, key: "rounds", value: rounds})
    this.setState({rounds});
  }

  handleSetRest = rest => {
    store.updateItem({id: this.props.id, key: "rest", value: rest})
    this.setState({rest});
  }

  countExercises = () => {''
    const exercises = this.state.content.filter(block => block.type === "exercise") || [];
    return exercises.length + 1;
  }

  handleAddExercise = () => {
    const title = `Exercise ${this.countExercises()}`;

    let newExercise;
    if (this.state.exerciseType === 'IntervalExercise') {
      newExercise = {...sampleCardioExercise(title, this.props.id)}
    } else if (this.state.exerciseType === 'MultisetExercise') {
      newExercise = {...sampleInlineExercise(title, this.props.id)}
    }

    this.setState({
      content: [...this.state.content, newExercise],
    })

    store.createItem(newExercise);
  }

  handleDeleteExercise = id => {
    store.deleteItem(id)

    this.setState({
      content: this.state.content.filter(item => item.id !== id),
    })
  }

  render() {
    const props = {
      onSetTitle: this.handleSetTitle,
      onSetDescription: this.handleSetDescription,
      onSetExerciseType: this.handleSetExerciseType,
      onSetLoad: this.handleSetLoad,
      onSetWork: this.handleSetWork,
      onSetRounds: this.handleSetRounds,
      onSetRest: this.handleSetRest,
      ...this.state,
    }
    return (
      <StyledExerciseWrapper>


        <Card>
          <CardBody>
            {this.state.editing ? (
              <Form>
                <ExerciseComponent {...props} />
              </Form>
            ) : (
              <ExerciseComponent {...props} />
            )}
            <ButtonGroup>
              <Button onClick={this.toggleEdit}>Toggle edit mode</Button>
              {(this.state.exerciseType === "MultisetExercise" ||
                this.state.exerciseType === "IntervalExercise") && (
                <Button outline onClick={this.handleAddExercise}>Add inner exercise</Button>
              )}
            </ButtonGroup>
          </CardBody>
        </Card>


        <InnerExercise>
          {this.state.content.length !== 0
            && (this.state.exerciseType === "MultisetExercise" || this.state.exerciseType === "IntervalExercise")
            && this.state.content.map(exercise => {
              return <ExerciseContainer key={exercise.id} {...exercise} onDelete={this.handleDeleteExercise} />
            })
          }
        </InnerExercise>


      </StyledExerciseWrapper>
    )
  }
}
