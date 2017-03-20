import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photos_actions';
import FeedIndex from './feed_index';


const mapStateToProps = (state, ownProps) => {
  return ({
    username: ownProps.username,
    photos: state.photos
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: userId => dispatch(fetchPhotos(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
