import React from 'react';

import UserButtonContainer from './user_button_container';

class UsersBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    const users = Object.values(this.props.subscriptions)
      .filter(subscription => Number(subscription.serverId) === Number(this.props.match.params.serverId))
      .map(subscription => this.props.users[subscription.userId]);      

    const list = users.map(user => <UserButtonContainer key={user.id} user={user} />);
      
    return (
      <section id="users-bar">
        <div id="users-bar-content">
          <div id="users-bar-user-header">USERS</div>
          <div id="users-bar-user-list">{list}</div>
        </div>
      </section>
    )
  }
}

export default UsersBar;