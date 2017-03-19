import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  }
}
const mapDispatchToProps = () => dispatch => {
 {
    //fetchUSers
  }
}

export default connect(
  mapStateToProps,
  null
)(NavBar);
