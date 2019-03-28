import React, {Component} from 'react';
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Label,
  Col
} from 'reactstrap';
import {LOAD_TYPES, suffices} from '../../../constants';

export class LoadFieldComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      ...this.props
    };
  }

  toggle = (args) => {
    this.setState({open: !this.state.open})
  }

  handleSetType = type => {
    const load = {
      ...this.state.load,
      type,
    }
    this.setState({load})
    this.props.onSetLoad(load)
  }

  handleSetValue = value => {
    const load = {
      ...this.state.load,
      value,
    }
    this.setState({load})
    this.props.onSetLoad(load)
  }

  render() {
    return (
      <Col md={this.props.size}>
        <FormGroup>
          <Label>Load</Label>
          <InputGroup>
            <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.open} toggle={this.toggle}>
              <DropdownToggle caret>{this.state.load.type}</DropdownToggle>
              <DropdownMenu>
                {LOAD_TYPES[this.props.exerciseType].map(type => {
                  return <DropdownItem onClick={() => this.handleSetType(type)} key={type}>{type}</DropdownItem>
                })}
              </DropdownMenu>
            </InputGroupButtonDropdown>
            {this.state.load.type !== "BODYWEIGHT" && (
              <>
                <Input placeholder="Ex. 20" defaultValue={this.props.load.value} onChange={event => this.handleSetValue(event.target.value)} type="number" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>{suffices[this.state.load.type]}</InputGroupText>
                </InputGroupAddon>
              </>
            )}
          </InputGroup>
        </FormGroup>
      </Col>
    )
  }
}
