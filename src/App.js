import React, { Component } from 'react';
import shortid from 'shortid';
import {SegmentContainer} from './components/SegmentContainer';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      content: [],
    }
  }

  componentWillMount = () => {
    const newSegment = {
      id: shortid(),
      title: "Main segment",
      type: "segment",
      description: "Replace this description with something for your segment",
      content: [],
    }

    this.setState({
      content: [...this.state.content, newSegment],
    })

  }

  render() {
    const segment = this.state.content[0]
    return (
      <SegmentContainer {...segment} />
    )
  }
}

export default App;
