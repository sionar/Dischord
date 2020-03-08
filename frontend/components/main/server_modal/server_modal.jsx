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
      component = <ServerSelectContainer />;
      break;
    case 'create':
      component = <ServerCreateContainer />;
      break;
    case 'join':
      component = <ServerJoinContainer />;
      break;
    case 'key':
      component = <ShowKeyContainer />;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

export default ServerModal;