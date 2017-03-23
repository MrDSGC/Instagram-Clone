import { connect } from 'react-redux';
import {
  fetchPhoto,
  updatePhoto} from '../../actions/photo_actions';
import {addLike, destroyLike} from '../../actions/like_actions';
import Photo from './photo';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentPhoto: ownProps.currentPhoto || state.currentPhoto,
    photoId: ownProps.photoId,
    feed: ownProps.feed,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    updatePhoto: photo => dispatch(updatePhoto(photo)),
    addLike: like => dispatch(addLike(like)),
    destroyLike: like => dispatch(destroyLike(like)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
