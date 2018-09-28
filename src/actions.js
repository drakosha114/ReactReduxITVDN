import faker from 'faker';

export const ADD_NEW_USER = 'ADD_NEW_USER';
export const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';


export const addNewUser = () => ({
    type: ADD_NEW_USER,
    payload: {
        user: `@${faker.internet.userName().toLowerCase()}`,
    }
});
export const addNewMessage = (author, text, datetime) => ({
    type: ADD_NEW_MESSAGE,
    payload: {
        author: author,
        datetime: datetime,
        text: text,
    }
});

