import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/photos_actions';
import { fetchUsers } from '../../actions/user_actions';
import { fetchComments} from '../../actions/comment_actions';
import {addLike, destroyLike} from '../../actions/like_actions';
import {isFollowingAnyone} from '../../actions/follow_actions'
import FeedIndex from './feed_index';
import _ from "lodash"


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    photos: _.values(state.photos),
    following: state.following.id,
    suggestions: state.user.suggestions
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: userId => dispatch(fetchFeed(userId)),
    addLike: like => dispatch(addLike(like)),
    destroyLike: like => dispatch(destroyLike(like)),
    fetchComments: () => dispatch(fetchComments()),
    isFollowingAnyone: () => dispatch(isFollowingAnyone()),
    fetchUsers: () => dispatch(fetchUsers())

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
