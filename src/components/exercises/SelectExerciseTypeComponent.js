import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {EXERCISE_TYPES, INTERVAL_SUB_TYPES} from '../../constants';
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
    } else if (parentItem.exerciseType === 'IntervalExercise') {
      return (
        <Dropdown isOpen={this.state.open} toggle={this.toggle}>
          <DropdownToggle caret>{this.state.exerciseType}</DropdownToggle>
          <DropdownMenu>
            {INTERVAL_SUB_TYPES.map((type, index) =>{
              return <DropdownItem key={type} onClick={() => this.handleSetType(type)}>{type}</DropdownItem>
            })}
          </DropdownMenu>
        </Dropdown>
      )
    }

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
