import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions'
import SearchBar from './search_bar';

const mapStateToProps = (state) => {
  return {
    users: state.user.users
  }
}
const mapDispatchToProps = () => dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
