import { connect } from 'react-redux';
import {
  destroyPhoto,
  fetchPhoto,
  updatePhoto} from '../../actions/photo_actions';
import {addLike, removeLike} from '../../actions/like_actions';
import Photo from './photo';

const mapStateToProps = (state) => {
  return {
    liked: (state.photos.currentPhoto.likers.indexOf(state.session.curretnUser) > -1),
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
