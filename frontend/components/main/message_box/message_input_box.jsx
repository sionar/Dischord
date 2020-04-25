import React from 'react';

class MessageInputBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.content) {
      const message = {message: {content: this.state.content, content_type: 'text'}}
      this.props.makeMessage( message, this.props.channel);
      this.setState({content: ''});
    }
  }

  handleChange(e) {
    this.setState({content: e.target.value})
  }

  render() {
    if (this.props.channel === undefined) return null;
    return (
      <div id="message-input-box-container">
        <form id="message-input-box-form" onSubmit={this.handleSubmit}>
          <input id="message-input-box-input" type="text" value={this.state.content} onChange={this.handleChange}
            placeholder={`Message #${this.props.channel.name}`} autoComplete="off">
          </input>
        </form>
      </div>
    )
  }
}

export default MessageInputBox;