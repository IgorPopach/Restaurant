import { connect } from 'react-redux';

import Login from '../components/pages/Login';
import { loginUser } from '../actions/authentication';

const mapStateToProps = (state) => ({
    user: state.auth.user,
    errors: state.auth.errors
});

const mapDispatchToProps = (dispatch) => ({
    loginUser: user => dispatch(loginUser(user))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);