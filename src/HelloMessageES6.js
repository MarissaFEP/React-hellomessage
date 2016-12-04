import React, {PropTypes} from 'react';

const InitialMessage = 'Hello ES6!!';

export default class HelloMessageES6 extends React.Component {
    static propTypes = {
        initialMessage: PropTypes.string,
        userMessage: PropTypes.string.isRequired
    };

    static defaultProps = {
        initialMessage: InitialMessage
    };

    constructor(props) {
        super(props);
        this.state = {
            isInitial: true
        };
    }

    handleClick = (e) => {
        this.setState({isInitial: !this.state.isInitial});
    };

    render() {
        const {initialMessage, userMessage} = this.props;
        const {isInitial} = this.state;

        return (            
            <div onClick={this.handleClick}> state message: {isInitial ? initialMessage : userMessage} </div>  
        );
    }    
}

