import React from 'react';
import PropTypes from 'prop-types';

export default class Users extends React.Component{
    render() {
        const { users, addUserHandler } = this.props;
        return (
            <div className={'users'}>
                <h3>Online users:</h3>
                <ul>
                    {users.map(user=>(<li key={user}>{user}</li>))}
                </ul>
                <button onClick={addUserHandler}>add new user</button>
            </div>
        );
    }
}
Users.propTypes = {
    users: PropTypes.array,
    addUserHandler: PropTypes.func,
};

Users.defaultProps = {
    users: [],
    addUserHandler: () => null,
};
