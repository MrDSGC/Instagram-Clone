import { connect } from 'react-redux';
import {uploadPhoto} from '../../actions/photo_actions'
import UploadPhotoForm from './upload_photo_form';

const mapStateToProps = state => dispatch => {
  return {
    currentUser: state.session.currentUser
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
