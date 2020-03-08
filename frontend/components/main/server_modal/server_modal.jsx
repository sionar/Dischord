import React from 'react';

import ServerSelectContainer from './server_select_container';
import ServerCreateContainer from './server_create_container';
import ServerJoinContainer from './server_join_container';

const ServerModal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'select':
      component = (
        <div className="modal-child" onClick={e => e.stopPropagation()}> 
          <ServerSelectContainer />;
        </div>
      )
      break;
    case 'create':
      component = (
        <div className="modal-child" onClick={e => e.stopPropagation()}> 
          <ServerCreateContainer />;
        </div>
      )
      break;
    case 'join':
      component = (
        <div className="modal-child" onClick={e => e.stopPropagation()}> 
          <ServerJoinContainer />;
        </div>
      )
      break;
    case 'key':
      component = (
        <div className="modal-child" onClick={e => e.stopPropagation()}> 
          <ShowKeyContainer />;
        </div>
      )
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
        {component}
    </div>
  );
}

export default ServerModal;