import { connect } from 'react-redux';
import MainPage from './main_page';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});


export default connect(
  mapStateToProps,
  null
)(MainPage);
