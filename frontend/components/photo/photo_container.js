import { connect } from 'react-redux';
import {
  destroyPhoto,
  fetchPhoto,
  updatePhoto} from '../../actions/photo_actions';
import {addLike, removeLike} from '../../actions/like_actions';
import Photo from './photo';

const mapStateToProps = (state) => {
  const liker_ids = state.photos.currentPhoto.likers.map((user)=> user.id)
  const currentUserId = state.session.currentUser.id
  return {
    liked: (liker_ids.indexOf(currentUserId) > -1),
    currentUser: state.session.currentUser,
    currentPhoto: state.photos.currentPhoto
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    destroyPhoto: photoId => dispatch(destroyPhoto(photoId)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    addLike: like => addLike(like),
    removeLike: like => removeLike(like)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
