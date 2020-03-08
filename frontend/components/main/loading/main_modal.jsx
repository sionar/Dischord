import React from 'react';

import Loading from './loading';
import Main from '../main';

class MainModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doneLoading: false
    }
  }

  componentDidMount() {
    this.props.getData().then(
      this.setState({doneLoading: true})
    );
  }

  render() {
    const component = this.state.doneLoading ? <Main /> : <Loading />;
    return (
      component
    )
  }
}

export default MainModal;