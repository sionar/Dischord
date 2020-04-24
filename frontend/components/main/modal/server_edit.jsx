import React from 'react';

class ServerEdit extends React.Component {
  constructor(props) {
    super(props);
    const server = this.props.servers[this.props.match.params.serverId]
    this.state = {
      id: server.id,
      name: server.name,
      private: false,
      imageFile: null,
      imageUrl: server.imageUrl
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleImageClick = this.handleImageClick.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  handleChange() {
    return e => this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('server[name]', this.state.name);
    formData.append('server[private]', this.state.private);
    if (this.state.imageFile) {
      formData.append('server[image]', this.state.imageFile);
    }
    this.props.updateServer(formData, this.state.id);
    this.props.closeModal();
  }

  handleClick(modal) {
    return e => {
      e.preventDefault();
      this.props.openModal(modal);
    }
  }

  handleImageClick() {
    $("#server-image-upload-input").trigger('click')
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ imageFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    const preview = this.state.imageUrl ? <img className="preview-image" src={this.state.imageUrl} /> : null;
    return (
      <div id="server-create-form">
        <div id="server-create-form-top">
          <h2 id="server-create-header">Edit Your Server</h2>
          <h3 id="server-create-subheader">You can change your server's name and icon.</h3>
          <div id="server-image-icon-container">
            <div id="server-image-icon-placeholder" onClick={this.handleImageClick}>
              {preview}
              <input id="server-image-upload-input" type="file" onChange={this.handleFile} style={{ display: "none" }} />
              <p id="server-image-upload-text">Upload an image</p>
            </div>
          </div>
          <div id="server-create-name-container">
            <label id="server-create-name-label">SERVER NAME</label>
            <input id="server-create-name-input" onChange={this.handleChange()} type="text" value={this.state.name}></input>
          </div>
        </div>
        <div id="server-create-buttons-bottom">
          <div id="server-create-buttons-container">
            <button onClick={this.handleClick("select")} id="server-create-back-button">Back</button>
            <button onClick={this.handleSubmit} id="server-create-create-button">Edit Server</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerEdit;







