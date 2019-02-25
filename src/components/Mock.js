import React, {Component} from 'react';
import { Container, Button, Form, FormGroup, Label, FormText, InputGroup, InputGroupAddon, InputGroupText, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export class Mock extends Component {
  constructor() {
    super()

    this.state = {open: false};
  }

  toggle = () => {
    this.setState({open: !this.state.open})
  }

  render() {
    return (
      <Container>
        <InputGroup>
          <Input placeholder="username" />
          <InputGroupAddon addonType="append">
            <Dropdown isOpen={this.state.open} toggle={this.toggle}>
              <DropdownToggle caret>
                Dropdown
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Foo Action</DropdownItem>
                <DropdownItem>Bar Action</DropdownItem>
                <DropdownItem>Quo Action</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </InputGroupAddon>
        </InputGroup>
      </Container>
    )
  }
}
