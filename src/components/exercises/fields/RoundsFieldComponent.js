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
      <Col sm={this.props.size}>
        <FormGroup>
          <Label>Rounds</Label>
          <Input placeholder="Ex. 3" defaultValue={this.props.rounds} onChange={event => this.handleSetRounds(event.target.value)} type="number" />
        </FormGroup>
      </Col>
    )
  }
}
