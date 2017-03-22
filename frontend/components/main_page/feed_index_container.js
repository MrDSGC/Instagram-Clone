import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/photos_actions';
import {
  updatePhoto} from '../../actions/photo_actions';
import {addLike, removeLike} from '../../actions/like_actions';
import FeedIndex from './feed_index';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    photos: state.photos
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: userId => dispatch(fetchFeed(userId)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    addLike: like => addLike(like),
    removeLike: like => removeLike(like)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
