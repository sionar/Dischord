import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = (state, ownProps) => ({
  ownProps: ownProps
});

const mapDispatchToProps = dispatch => ({
  getData: () => dispatch(getData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);