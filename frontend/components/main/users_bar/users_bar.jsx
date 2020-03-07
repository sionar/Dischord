import React from 'react';

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
      list = this.props.users[id].map(user => <div key={user.id} className="users-bar-user-name">{user.username}</div>)  
    }
    return (
      <section id="users-bar">
        <div id="users-bar-content">
          <div id="users-bar-user-header">USERS</div>
          {list}
        </div>
      </section>
    )
  }
}

export default UsersBar;