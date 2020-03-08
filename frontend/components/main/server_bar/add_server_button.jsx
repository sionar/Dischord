import React from 'react';

class AddServerButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal();
  }

  render() {
    return (
      <button onClick={this.handleClick} className="server-bar-server-button" id="add-server-button-container">
        <svg id="add-server-button-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
          <path fill="#43B581" d="M21 11.001H13V3.00098H11V11.001H3V13.001H11V21.001H13V13.001H21V11.001Z"></path>
        </svg>
        <div className="server-button-hover-label"><p>Add Server</p></div>
      </button>
    )
  }
}

export default AddServerButton;
