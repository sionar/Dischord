import React from 'react';

import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const channels = this.props.channels.filter(el => Number(el.serverId) === Number(this.props.match.params  .serverId));
    return (
      channels.map(channel => <ChannelListItem key={channel.id} channel={channel} changeActiveChannel={this.props.changeActiveChannel}/>)
    )
  }
}

export default ChannelList;