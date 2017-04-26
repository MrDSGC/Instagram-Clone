import { connect } from 'react-redux';
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import {isFollowing, addFollow, destroyFollow } from '../../actions/follow_actions';
import ProfileDetails from './profile_details';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    user: state.user,
    username: ownProps.username,
    photos: state.photos,
    following: state.following.id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: username => dispatch(fetchUser(username)),
    isFollowing: following_id => dispatch(isFollowing(following_id)),
    addFollow: follow => dispatch(addFollow(follow)),
    destroyFollow: following_id => dispatch(destroyFollow(following_id)),
    fetchUsers: () => dispatch(fetchUsers())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetails);
