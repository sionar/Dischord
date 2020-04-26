import React from 'react';
import { Route } from 'react-router-dom';

import ServerSelectContainer from './server_select_container';
import ServerCreateContainer from './server_create_container';
import ServerDeleteContainer from './server_delete_container';
import ServerLeaveContainer from './server_leave_container';
import ServerJoinContainer from './server_join_container';
import ServerInviteContainer from './server_invite_container';
import ServerEditContainer from './server_edit_container';
import ChannelEditContainer from './channel_edit_container';
import ChannelCreateContainer from './channel_create_container';
import ChannelDeleteContainer from './channel_delete_container';
import UserEditContainer from './user_edit_container';
import MessageDeleteContainer from './message_delete_container';

const Modal = ({modal, closeModal}) => {
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
    case 'editServer':
      component = (
        <div className="modal-child" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId" component={ServerEditContainer} />;
        </div>
      )
      break;
    case 'deleteServer':
      component = (
        <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId/" component={ServerDeleteContainer} />
        </div>
      )
      break;
    case 'leaveServer':
      component = (
        <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId/" component={ServerLeaveContainer} />
        </div>
      )
      break;   
    case 'editChannel':
      component = (
        <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId/:channelId" component={ChannelEditContainer} />
        </div>
      )
      break;
    case 'addChannel':
      component = (
        <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId/:channelId" component={ChannelCreateContainer} />
        </div>
      )
      break;
    case 'deleteChannel':
      component = (
        <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}> 
          <Route path="/channels/:serverId/:channelId" component={ChannelDeleteContainer} />
        </div>
      )
      break;
    case 'editUser':
      component = (
        <div className="modal-child-channel" onMouseDown={e => e.stopPropagation()}> 
          <UserEditContainer />
        </div>
      )
      break;
    case 'deleteMessage':
        component = (
          <div className="modal-child-delete-message" onMouseDown={e => e.stopPropagation()}> 
            <MessageDeleteContainer />
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

export default Modal;