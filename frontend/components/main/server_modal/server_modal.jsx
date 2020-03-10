import React from 'react';
import { Route } from 'react-router-dom';

import ServerSelectContainer from './server_select_container';
import ServerCreateContainer from './server_create_container';
import ServerJoinContainer from './server_join_container';
import ServerInviteContainer from './server_invite_container';

const ServerModal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'select':
      component = (
        <div className="modal-child" onMouseDown={e => e.stopPropagation()}> 
          <ServerSelectContainer />
        </div>
      )
      break;
    case 'create':
      component = (
        <div className="modal-child" onMouseDown={e => e.stopPropagation()}> 
          <ServerCreateContainer />;
        </div>
      )
      break;
    case 'join':
      component = (
        <div className="modal-child" onMouseDown={e => e.stopPropagation()}> 
          <ServerJoinContainer />;
        </div>
      )
      break;
    case 'invite':
      component = (
        <div className="modal-child-invite" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId" component={ServerInviteContainer} />
        </div>
      )
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onMouseDown={closeModal}>
        {component}
    </div>
  );
}

export default ServerModal;