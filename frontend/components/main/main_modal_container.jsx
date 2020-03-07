import { connect } from 'react-redux';
import { getData } from '../../actions/server_actions';
import MainModal from './main_modal';

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(null, mapDispatchToProps)(MainModal);