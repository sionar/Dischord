import { connect } from 'react-redux';
import { openModal } from '../../../actions/modal_actions';

import AddServerButton from './add_server_button';


const mapDispatchToProps = dispatch => ({
  openModal: () => dispatch(openModal('selection'))
});

export default connect(null, mapDispatchToProps)(AddServerButton);