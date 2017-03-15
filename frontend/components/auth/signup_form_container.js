import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';
import SignUpForm from './signup_form';


const mapStateToProps = (state) => ({
  user: state.user,
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUpForm);
