import React, {PropTypes} from 'react'

const InitialMessage = {
    initialMessage: 'Hello ES5!!'
}

var HelloMessageES5 = React.createClass({

    getInitialState: function() {
        return ({isInitial: true}); 
    },

    propTypes: {
        initialMessage: PropTypes.string,
        userMessage: PropTypes.string.isRequired
    },

    getDefaultProps: function() {
        return InitialMessage;
    },

    handleClick: function() {
        this.setState({isInitial: !this.state.isInitial});
    },

    render: function() {
        const {initialMessage, userMessage} = this.props;
        const {isInitial} = this.state;

        return( 
            <div onClick={this.handleClick}> state message: {isInitial ? initialMessage : userMessage } </div>
        );
    }
});

export default HelloMessageES5;
