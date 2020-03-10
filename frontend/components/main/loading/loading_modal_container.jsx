import { connect } from 'react-redux';
import { getData } from '../../../actions/server_actions';
import LoadingModal from './loading_modal';

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(null, mapDispatchToProps)(LoadingModal);