import React from 'react';

import ChannelListItemContainer from './channel_list_item_container';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.openModal('addChannel');
  }

  render() {
    const channels = this.props.channels.filter(el => Number(el.serverId) === Number(this.props.match.params  .serverId));
    const channelItems =
      channels.length > 0 ? 
        channels.map(channel => <ChannelListItemContainer key={channel.id} channel={channel} changeActiveChannel={this.props.changeActiveChannel}/>)
        : null
    return (
      <div id="channel-list-container">
        <div id="channel-list-header-container">
          <h2 id="channel-list-header-text">Text Channels</h2>
          <button id="channel-list-create-button" onClick={this.handleClick}>
            <svg id="channel-list-add-channel-icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="false" width="24" height="24" viewBox="0 0 24 24">
              <path fill="#43B581" d="M21 11.001H13V3.00098H11V11.001H3V13.001H11V21.001H13V13.001H21V11.001Z"></path>
            </svg>
          </button>
        </div>
        {channelItems}
      </div>
    )
  }
}

export default ChannelList;