import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LogInPage = ({ startLogin }) => (
    <div>
        <h2>Please Log In</h2>  
            <button onClick={startLogin}>Log In</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LogInPage);