import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photos_actions';
import { receiveComments} from '../../actions/comment_actions'
import PhotoIndex from './photo_index';


const mapStateToProps = (state, ownProps) => {
  return ({
    username: ownProps.username,
    photos: state.photos,
    currentPhoto: state.currentPhoto
  })
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPhotos: userId => dispatch(fetchPhotos(userId)),
    receiveComments: () => dispatch(receiveComments([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
