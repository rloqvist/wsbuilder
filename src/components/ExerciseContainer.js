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
        <CardTitle>{args.title}</CardTitle>
        <CardSubtitle>{args.exerciseType}</CardSubtitle>
        <CardText>{args.description}</CardText>
        <Button>Edit exercise</Button>
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

  render() {
    if (!this.state.editing) {
      return <StyledExerciseWrapper><DisplayExercise {...this.props} /></StyledExerciseWrapper>;
    }

    return <div />;
  }
}
