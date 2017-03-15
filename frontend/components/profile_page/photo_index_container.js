import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import PhotoIndex from './photo_index';


const mapStateToProps = (state) => {
  debugger
  return {
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: userId => dispatch(userId)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
