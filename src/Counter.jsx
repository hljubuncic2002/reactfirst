import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 5
        };
    }

    incrementCount = () => {
        this.setState((Counter) => ({
            count: Counter.count +1
        }));
        /* TODO (Counter): Use setState() to modify the count. Here’s an example:
            this.setState({
                keyToChange: valueToChangeTo
            });
        */
    }

    render() {
        return (
            <div className="counter">
                <h1>{this.state.count}</h1>

                <button onClick={this.incrementCount}>+1</button>
            </div>
        );
    }
}

export default Counter;