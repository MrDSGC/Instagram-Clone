import { connect } from 'react-redux';
import { fetchComments, destroyComment } from '../../actions/comment_actions';
import CommentIndex from './comment_index';
import _ from "lodash"

const mapStateToProps = (state, ownProps) => {
  return ({
    currentUser: state.session.currentUser,
    comments: _.values(state.comments) || [],
    currentPhoto: ownProps.currentPhoto || state.currentPhoto,
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
