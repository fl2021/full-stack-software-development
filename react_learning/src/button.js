import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isButtonOn: true};
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick() {
        this.setState(
            (prevState) => ({
                    isButtonOn: !prevState.isButtonOn
            })
        )
    }

   
    render() {
        return (
            <button onClick={this.handleClick}>    
                {this.state.isButtonOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Button;