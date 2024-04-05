import React, { Component } from 'react';
import './App.css';
import HelloWorld from './HelloWorld';
import Counter from './Counter';

//TODO (FilteredList): create a produce list using the 'const' variable keyword

class App extends Component {
    render() {
        return (

            <div className="App">
                <HelloWorld name={'Haris'}/>
                <Counter name={'[Counter]'}/>
            </div>
        );
    }
}

export default App;