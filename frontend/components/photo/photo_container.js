import { connect } from 'react-redux';
import {
  destroyPhoto,
  fetchPhoto } from '../../actions/photo_actions';
import Photo from './photo';

const mapStateToProps = (state) => {
  return {
    currentPhoto: this.state.currentPhoto
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
    destroyPhoto: photoid => dispatch(destroyPhoto(photoId))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Photo);
