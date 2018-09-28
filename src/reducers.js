import { combineReducers } from 'redux';

import { ADD_NEW_USER, ADD_NEW_MESSAGE } from './actions';

const USERS_STATE = ['@john_123', '@alex_1989', '@cris'];
const MESSAGES_STATE = [
    {
        text: 'Hello, world!',
        datetime: 148612946322,
        author: '@alex_1989',
    },{
        text: 'Hi, Alex',
        datetime: 148612996322,
        author: '@cris',
    }
];

const userReducers = (state = USERS_STATE, action) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_NEW_USER: {
            const { user } = payload;
            return state.concat(user);
        }
        default: {
            return state
        }
    }
};

const messagesReducer = (state = MESSAGES_STATE, action) => {
    const { payload, type } = action;
    switch (type) {
        case ADD_NEW_MESSAGE: {
            const {author, datetime, text} = payload;
            return state.concat({
                author,
                datetime,
                text,
            })
        }
        default: {
            return state;
        }
    }
};

export default combineReducers({
    userReducers,
    messagesReducer,
})


