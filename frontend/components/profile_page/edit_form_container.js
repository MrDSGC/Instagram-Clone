import { connect } from 'react-redux';
import { receiveErrors } from '../../actions/session_actions';
import { editUser } from '../../actions/user_actions';
import EditForm from './edit_form';


const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    errors: state.user.errors
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
