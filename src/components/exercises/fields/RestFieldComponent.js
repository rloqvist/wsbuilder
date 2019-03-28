import React, {Component} from 'react';
import {
  Input,
  FormGroup,
  Label,
  Col
 } from 'reactstrap';

export class RestFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.props
    };
  }

  handleSetRest = rest => {
    this.setState({rest})
    this.props.onSetRest(rest)
  }

  render() {
    return (
      <Col sm={this.props.size}>
        <FormGroup>
          <Label>Rest</Label>
          <Input placeholder="Ex. 20" defaultValue={this.props.rest} onChange={event => this.handleSetRest(event.target.value)} type="number" />
        </FormGroup>
      </Col>
    )
  }
}
