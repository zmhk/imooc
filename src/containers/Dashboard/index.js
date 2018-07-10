import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/auth.redux';

import './style.less';

@connect(
    state => state.auth,
    { logout }
)
class Auth extends React.Component {
    render() {
        console.log(this.props.user)
        return (
            <div>
                  dashboard
            </div>
        )
    }
}

export default Auth;

