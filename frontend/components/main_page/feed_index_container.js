import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/photos_actions';
import FeedIndex from './feed_index';


const mapStateToProps = (state, ownProps) => {
  return ({
    username: state.session.currentUser.username,
    photos: state.photos
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFeed: userId => dispatch(fetchFeed(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
