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
import {WORK_TYPES, suffices} from '../../../constants';

export class WorkFieldComponent extends Component {
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
    const work = {
      ...this.state.work,
      type,
    }
    this.setState({work})
    this.props.onSetWork(work)
  }

  handleSetValue = value => {
    const work = {
      ...this.state.work,
      value,
    }
    this.setState({work})
    this.props.onSetWork(work)
  }

  render() {
    return (
      <Col sm={this.props.size}>
        <FormGroup>
          <Label>Work</Label>
          <InputGroup>
            <InputGroupButtonDropdown addonType="prepend" isOpen={this.state.open} toggle={this.toggle}>
              <DropdownToggle caret>{this.state.work.type}</DropdownToggle>
              <DropdownMenu>
                {WORK_TYPES[this.props.exerciseType].map(type => {
                  return <DropdownItem onClick={() => this.handleSetType(type)} key={type}>{type}</DropdownItem>
                })}
              </DropdownMenu>
            </InputGroupButtonDropdown>
            <Input placeholder="Ex. 20" defaultValue={this.props.work.value} onChange={event => this.handleSetValue(event.target.value)} type="number" />
            <InputGroupAddon addonType="append">
              <InputGroupText>{suffices[this.state.work.type]}</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Col>
    )
  }
}
