import React from 'react';
import PropTypes from 'prop-types';

export default class Messages extends React.Component{
    constructor(props) {
        super(props);
        this.formSubmitHandler = this.formSubmitHandler.bind(this);
    }
    formSubmitHandler (e) {
        const { addMessageHandler } = this.props;
        e.preventDefault();
        addMessageHandler('@alex123', this.input.value, Date.now());
        this.input.value = '';
    }
    render() {
        const { messages } = this.props;
        return (
            <div className={'chart'}>
                <form onSubmit={this.formSubmitHandler}>
                    {
                        messages.map(message => {
                            const { datetime, author, text } = message;
                            const date = new Date(datetime);
                            return (
                                <p key={datetime} className={'message'}>
                                    <span className={'message__date'}>{`${date.getDate()}/${date.getMonth()} ${date.getHours()}:${date.getMinutes()}`}</span>
                                    <span className={'message__author'}>{author}</span>
                                    <span>{text}</span>
                                </p>
                            );
                        })
                    }
                    <input
                        className={'chat__input'}
                        ref={(input) => this.input = input}
                    />
                </form>
            </div>
        );
    }
}

Messages.propTypes = {
    messages: PropTypes.array,
    addMessageHandler: PropTypes.func,
};

Messages.defaultProps = {
    messages: [],
    addMessageHandler: () => null,
};
