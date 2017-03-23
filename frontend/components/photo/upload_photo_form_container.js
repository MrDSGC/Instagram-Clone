import { connect } from 'react-redux';
import {uploadPhoto} from '../../actions/photo_actions'
import {fetchPhotos} from '../../actions/photos_actions'
import UploadPhotoForm from './upload_photo_form';

const mapStateToProps = (state, ownProps) => dispatch => {
  return {
    photos: state.photos.photos,
    currentUser: ownProps.currentUser
  }
}

const mapDispatchToProps = () => dispatch => {
  return {
    uploadPhoto: photo => dispatch(uploadPhoto(photo))
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadPhotoForm);
