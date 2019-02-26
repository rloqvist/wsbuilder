import React, {Component} from 'react';
import styled from 'styled-components';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

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
    <Card>
      <CardBody>
        <CardTitle>{args.title}<Button color="link" onClick={() => args.onDelete(args.id)}>delete</Button></CardTitle>
        <CardSubtitle>{args.exerciseType}</CardSubtitle>
        <CardText>{args.description}</CardText>
        <Button onClick={args.toggleEdit}>Finished editing</Button>
      </CardBody>
    </Card>
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
