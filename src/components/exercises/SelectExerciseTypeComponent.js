import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {EXERCISE_TYPE_OPTIONS, INTERVAL_SUB_TYPES, EXERCISE_TYPES} from '../../constants';
import {store} from '../../store';

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
    const parentItem = store.getParentItem(this.props.parentId);
    console.log('parentItem', parentItem);

    if (parentItem.exerciseType === 'MultisetExercise') {
      return null;
    }

    return (
      <Dropdown isOpen={this.state.open} toggle={this.toggle}>
        <DropdownToggle caret>{EXERCISE_TYPES[this.state.exerciseType]}</DropdownToggle>
        <DropdownMenu>
          {EXERCISE_TYPE_OPTIONS.map((option, index) =>{
            return <DropdownItem key={option.name} onClick={() => this.handleSetType(option.name)}>{option.label}</DropdownItem>
          })}
        </DropdownMenu>
      </Dropdown>
    )
  }
}
