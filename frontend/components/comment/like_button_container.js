import { connect } from 'react-redux';
import {addLike, removeLike} from '../../actions/like_actions';
import { fetchPhoto} from '../../actions/photo_actions';
import LikeButton from './like_button'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    currentPhoto: ownProps.currentPhoto || state.currentPhoto
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addLike: like => addLike(like),
    removeLike: like => removeLike(like),
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikeButton);
