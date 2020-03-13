import React from 'react';

class userEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageFile: null,
      imageUrl: this.props.currentUser.imageUrl
    }
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
    if (this.state.imageFile) {
      formData.append('user[image]', this.state.imageFile);
    }
    this.props.updateUser(formData, this.props.currentUser.id)
    this.props.closeModal();
  }

  handleClick(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleImageClick() {
    $("#user-image-upload-input").trigger('click')
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
      <div id="user-edit-form">
        <div id="user-edit-form-top">
          <h2 id="user-edit-header">Update your user image</h2>
          <div id="user-image-icon-container">
            <div id="user-image-icon-placeholder" onClick={this.handleImageClick}>
              {preview}
              <input id="user-image-upload-input" type="file" onChange={this.handleFile} style={{ display: "none" }} />
              <p id="user-image-upload-text">Upload an image</p>
            </div>
          </div>
          <div id="user-edit-name-container">
            <p id="user-name-username">{this.props.currentUser.username}#{this.props.currentUser.usertag}</p>
          </div>
        </div>
        <div id="user-edit-buttons-bottom">
          <div id="user-edit-buttons-container">
            <button onClick={this.handleClick} id="user-edit-close-button">Close</button>
            <button onClick={this.handleSubmit} id="user-edit-edit-button">Update Image</button>
          </div>
        </div>
      </div>
    )
  }
}

export default userEdit;







