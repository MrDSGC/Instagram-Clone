import { connect } from 'react-redux';
import { receiveErrors } from '../../actions/session_actions';
import { editUSer } from '../../actions/user_actions';
import EditForm from './edit_form';


const mapStateToProps = (state) => {
  debugger
  return(
    currentUser: state.session.currentUser,
    errors: state.user.errors
  )
};

const mapDispatchToProps = (dispatch) => {
  return {
    editUser: user => dispatch(editUser(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditForm);
