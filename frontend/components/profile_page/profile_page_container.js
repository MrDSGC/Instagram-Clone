import { connect } from 'react-redux';
import ProfilePage from './profile_page';


const mapStateToProps = (state, ownProps) => {
  return ({
    username: ownProps.params.username,
  })
};


export default connect(
  mapStateToProps,
  null
)(ProfilePage);
