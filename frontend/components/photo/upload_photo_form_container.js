import { connect } from 'react-redux';
import UploadPhotoForm from './upload_photo_form';

const mapDispatchToProps = () => dispatch => {
  return {
    uploadPhoto: photo => dispatch(uploadPhoto(photo))
  }
}
export default connect(
  null,
  mapDispatchToProps
)(UploadPhotoForm);
