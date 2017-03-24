import { connect } from 'react-redux';
import {isFollowingAnyone} from '../../actions/follow_actions'
import Message from './message'

const mapStateToProps = (state, ownProps) => {
  return ({
    following: state.following.id
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    isFollowingAnyone: () => dispatch(isFollowingAnyone())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
