import React from 'react';
import CreateServerFormContainer from './create_server_form_container';

const CreateServerModal = ({modal, closeModal}) => {
  if (!modal) {
    return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        <CreateServerFormContiner />
      </div>
    </div>
  );
}

export default CreateServerModal;