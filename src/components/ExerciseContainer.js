import React, {Component} from 'react';
import styled from 'styled-components';
import {Card, CardBody, Button, Form} from 'reactstrap';
import * as Showdown from "showdown";
import {store} from '../store';
import {ExerciseComponent} from './ExerciseComponent';

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true
});

const StyledExerciseWrapper = styled.div`
  padding: 10px 0;
`

export class ExerciseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
      ...this.props,
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

  render() {
    console.log(this.state);
    //const Exercise = Exercises[this.state.exerciseType]; // this.state.exerciseType
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
            <Button onClick={this.toggleEdit}>Toggle edit mode</Button>
          </CardBody>
        </Card>
      </StyledExerciseWrapper>
    )
  }
}
