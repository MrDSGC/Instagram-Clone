import { connect } from 'react-redux';
import {
} from '../../actions/user_actions';
import {addLike, removeLike} from '../../actions/like_actions';
import ProfileDetails from './profile_details';

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDetails);
