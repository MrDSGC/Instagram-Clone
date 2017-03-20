import { connect } from 'react-redux';
import { createComment } from '../../actions/comment_actions';
import CommentForm from './comment_form';


const mapStateToProps = (state, ownProps) => {
  return {
    photo_id: ownProps.photoId,
    currentUser: state.session.currentUser
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createComment: (photo_id, comment) => dispatch(createComment(photo_id, comment))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
