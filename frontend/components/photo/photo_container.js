import { connect } from 'react-redux';
import {
  fetchPhoto,
  updatePhoto} from '../../actions/photo_actions';
import {addLike, removeLike} from '../../actions/like_actions';
import Photo from './photo';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentPhoto: state.currentPhoto,
    photoId: ownProps.photoId,
    feed: ownProps.feed
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    addLike: like => addLike(like),
    removeLike: like => removeLike(like)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
