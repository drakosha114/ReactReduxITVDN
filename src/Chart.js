import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addNewUser, addNewMessage } from './actions';

import { Messages, Users } from 'containers'

class Chart extends React.Component{

    render() {
        const { messages, users, addNewUser, addNewMessage } = this.props;
        return (
            <main className='main-wrapper'>
                <Messages
                    messages={messages}
                    addMessageHandler={addNewMessage}
                />
                <Users
                    users={users}
                    addUserHandler={addNewUser}
                />
            </main>
        )
    }
}


const mapStateToProps = (state) => ({
    users: state.userReducers,
    messages: state.messagesReducer,
});
const mapDispatchToProps = (dispatch) => ({
    addNewUser: bindActionCreators(addNewUser, dispatch),
    addNewMessage: bindActionCreators(addNewMessage, dispatch),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Chart);
