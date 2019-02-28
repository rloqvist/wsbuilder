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
          <Input placeholder="Ex. 20" defaultValue={this.props.work.value} onChange={event => this.handleSetValue(event.target.value)} type="number" />
        </Col>
      </FormGroup>
    )
  }
}
