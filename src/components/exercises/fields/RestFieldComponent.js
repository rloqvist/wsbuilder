import React, {Component} from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
      <FormGroup row>
        <Label sm={2}>Rest</Label>
        <Col sm={10}>
          <Input placeholder="Ex. 20" defaultValue={this.props.rest} onChange={event => this.handleSetValue(event.target.value)} type="number" />
        </Col>
      </FormGroup>
    )
  }
}
