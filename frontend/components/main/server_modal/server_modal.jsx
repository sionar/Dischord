import React from 'react';

import ServerSelectionContainer from './server_selection_container';

const ServerModal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'selection':
      component = <ServerSelectionContainer />;
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