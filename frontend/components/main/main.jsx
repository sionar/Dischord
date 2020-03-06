import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        Main component
      </div>
    )
  }
}

export default Main;