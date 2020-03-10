import { connect } from 'react-redux';

import HeaderBar from './header_bar';

const mapStateToProps = state => ({
  channels: state.entities.channels
});

export default connect(mapStateToProps, null)(HeaderBar);