import React from 'react';

import UserButtonContainer from './user_button_container';

class UsersBar extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    let list;
    let serverId = this.props.match.params.serverId
    if (serverId === '@me'|| Object.entries(this.props.users).length === 0)
      list = null;
    else {
      const id = Number(serverId);
      list = this.props.users[id].map(
        user => <UserButtonContainer key={user.id} user={user} />)
      }
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