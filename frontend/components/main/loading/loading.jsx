import React from 'react';

const Loading = () => {
  return (
    <section id="loading-flex-container">
      <img src={window.loadingIcon} id="loading-icon"></img>
      <h2 id="loading-text">LOADING</h2>
    </section>
  )
}

export default Loading;