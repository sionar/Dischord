import { connect } from 'react-redux';
import { getData } from '../../actions/server_actions';
import Main from './main';

const mapStateToProps = state => ({
  state: state
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);