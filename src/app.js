import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

import Chart from './Chart';

const loggerMiddleware = (store) => {
    return function(next) {
        return function (action) {
            console.debug('trigger', action.type);
            console.debug('payload', action.payload);
            console.debug('store after action', store.getState());
            next(action)
        }
    }
};

const store = createStore(
    rootReducer,
    applyMiddleware(loggerMiddleware)
);
window.store = store;

export default class App extends React.Component{
    render(){
        return (
            <Provider store={store}>
                <div>
                    <Chart/>
                </div>
            </Provider>
        );
    }
}
