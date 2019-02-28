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

const LOAD_TYPES = ["WEIGHT", "PERCENTAGE", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE"];

const suffices = {
  WEIGHT: "kg",
  PERCENTAGE: "%",
  HEIGHT: "cm",
  LENGTH: "m",
  DISTANCE: "km",
  HEARTRATE: "bpm"
}

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
      <FormGroup row>
        <Label sm={2} md={2}>Load</Label>
        <Col sm={10} md={6}>
          <InputGroup>
            <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.open} toggle={this.toggle}>
              <DropdownToggle caret>{this.state.load.type}</DropdownToggle>
              <DropdownMenu>
                {LOAD_TYPES.map(type => {
                  return <DropdownItem onClick={() => this.handleSetType(type)} key={type}>{type}</DropdownItem>
                })}
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input placeholder="Ex. 20" defaultValue={this.props.load.value} onChange={event => this.handleSetValue(event.target.value)} type="number" />
            <InputGroupAddon addonType="append">
              <InputGroupText>{suffices[this.state.load.type]}</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </FormGroup>
    )
  }
}
