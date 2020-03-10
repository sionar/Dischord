import React from 'react';
import { NavLink } from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.changeActiveChannel({
      serverId: this.props.channel.serverId,
      channelId: this.props.channel.id      
    })
  }

  render() {
    const channel = this.props.channel;
    return (
      <div id="channel-list-item-container">
        <NavLink to={`/channels/${channel.serverId}/${channel.id}`}>
          <div id="channel-list-item-name" onClick={this.handleClick}>{channel.name}</div>
        </NavLink>
      </div>
    )
  }
}


export default ChannelListItem;