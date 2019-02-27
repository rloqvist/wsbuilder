import React, {Component} from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input, Form, FormGroup } from 'reactstrap';
import {SelectTypeComponent} from './exercises/SelectTypeComponent';

const StyledExerciseWrapper = styled.div`
  padding: 10px 0;
`

const DisplayExercise = args => {
  console.log("DisplayExercise args:", args);
  return (
    <Card>
      <CardBody>
        <CardTitle>{args.title}<Button color="link" onClick={() => args.onDelete(args.id)}>delete</Button></CardTitle>
        <CardSubtitle>{args.exerciseType}</CardSubtitle>
        <CardText>{args.description}</CardText>
        <Button onClick={args.toggleEdit}>Edit exercise</Button>
      </CardBody>
    </Card>
  )
}

const EditExercise = args => {
  console.log("EditExercise args:", args);
  return (
    <Form>
      <FormGroup>
        <Input placeholder="Name your exercise" defaultValue={args.title} />
      </FormGroup>

      <FormGroup>
        <SelectTypeComponent />
      </FormGroup>

      <FormGroup>
        <Input type="textarea" defaultValue={args.description} />
      </FormGroup>

      <FormGroup>
        <Button onClick={args.toggleEdit}>Finished editing</Button>
      </FormGroup>
    </Form>
  )
}

export class ExerciseContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    }
  }

  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    })
  }

  render() {
    if (!this.state.editing) {
      return (
        <StyledExerciseWrapper>
          <DisplayExercise {...this.props} toggleEdit={this.toggleEdit} />
        </StyledExerciseWrapper>
      )
    }

    return (
      <StyledExerciseWrapper>
        <EditExercise {...this.props} toggleEdit={this.toggleEdit} />
      </StyledExerciseWrapper>
    )
  }
}
