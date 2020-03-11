import { connect } from 'react-redux';

import UserButton from './user_button';

const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user
});

export default connect(mapStateToProps, null)(UserButton);