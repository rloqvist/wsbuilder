import React, {Component} from 'react';
import {
  Input,
  FormGroup,
  Label,
  Col
 } from 'reactstrap';

export class RoundsFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props
    };
  }

  handleSetRounds = rounds => {
    this.setState({rounds})
    this.props.onSetRounds(rounds)
  }

  render() {
    return (
      <FormGroup row>
        <Label sm={2}>Rounds</Label>
        <Col sm={10}>
          <Input placeholder="Ex. 3" defaultValue={this.props.rounds} onChange={event => this.handleSetValue(event.target.value)} type="number" />
        </Col>
      </FormGroup>
    )
  }
}
