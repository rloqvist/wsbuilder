import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const options = [
  'PlainExercise',
  'MultisetExercise',
  'InlineExercise',
  'CardioExercise',
  'IntervalExercise',
];

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
          {options.map((option, index) =>{
            return <DropdownItem key={option} onClick={() => this.handleSetType(option)}>{option}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
