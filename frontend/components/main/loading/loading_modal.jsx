import React from 'react';

import Loading from './loading';
import Main from '../main';

class LoadingModal extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getData()
  }

  render() {
    const component = this.props.doneLoading ? <Main /> : <Loading /> 
    return (
      component
    )
  }
}

export default LoadingModal;