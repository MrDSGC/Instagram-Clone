import { connect } from 'react-redux';
import {fetchUser} from '../../actions/user_actions';
import ProfileDetails from './profile_details';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    username: ownProps.username,
    photos: state.photos
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: username => dispatch(fetchUser(username))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetails);
