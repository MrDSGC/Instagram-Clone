import { connect } from 'react-redux';
import {
  destroyPhoto,
  fetchPhoto } from '../../actions/photo_actions';
import Photo from './photo';

const mapStateToProps = (state) => {
  return ({
    currentPhoto: state.photos.currentPhoto
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    destroyPhoto: photoId => dispatch(destroyPhoto(photoId)),
    updatePhoto: photo => dispatch(updatePhoto(photo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
