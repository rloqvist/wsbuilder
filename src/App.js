import React, { Component } from 'react';
import shortid from 'shortid';
import {SegmentContainer} from './components/SegmentContainer';
import {store} from './store';
import ComponentTree from 'react-component-tree'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
    }
  }

  componentWillMount = async () => {
    if (store) {

      this.setState({
        content: [...store.build],
      })
    }
  }

  render() {
    const segment = this.state.content[0]
    return (
      <SegmentContainer {...segment} />
    )
  }
}

export default App;
