import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const options = [
  'PlainExercise',
  'MultisetExercise',
  'InlineExercise',
  'CardioExercise',
];

export class SelectTypeComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      type: this.props.exerciseType || 'Select exercise type',
    };
  }

  toggle = (args) => {
    console.log('args', args);
    this.setState({open: !this.state.open})
  }

  handleSetType = type => {
    console.log('type', type);
    this.setState({type})
  }

  render() {
    return (
      <Dropdown isOpen={this.state.open} toggle={this.toggle}>
        <DropdownToggle caret>{this.state.type}</DropdownToggle>
        <DropdownMenu>
          {options.map((option, index) =>{
            return <DropdownItem key={option} onClick={() => this.handleSetType(option)}>{option}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
