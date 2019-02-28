import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {EXERCISE_TYPES} from '../../constants';

export class SelectExerciseTypeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      ...this.props,
    };
  }

  toggle = (args) => {
    this.setState({open: !this.state.open})
  }

  handleSetType = exerciseType => {
    this.props.onSetExerciseType(exerciseType)
    this.setState({exerciseType})
  }

  render() {
    return (
      <Dropdown isOpen={this.state.open} toggle={this.toggle}>
        <DropdownToggle caret>{this.state.exerciseType}</DropdownToggle>
        <DropdownMenu>
          {EXERCISE_TYPES.map((type, index) =>{
            return <DropdownItem key={type} onClick={() => this.handleSetType(type)}>{type}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
