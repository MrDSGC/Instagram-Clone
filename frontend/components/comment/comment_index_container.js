import { connect } from 'react-redux';
import { fetchComments, destroyComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';


const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    comments: state.comments,
    currentPhoto: state.currentPhoto,
    photo_id: ownProps.photoId,
    feed: ownProps.feed
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchComments: photoId => dispatch(fetchComments(photoId)),
    destroyComment: (photo_id, comment_id) => dispatch(destroyComment(photo_id, comment_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
