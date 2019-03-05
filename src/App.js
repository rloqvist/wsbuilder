import React, {Component} from 'react';
import {SegmentContainer} from './components/SegmentContainer';
import {store} from './store';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      content: [],
    }
  }

  componentWillMount = () => {
    console.log('document.cookie', document.cookie);
    this.setState({
      content: [...store.build],
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
