import React, {Component} from 'react';
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

import Counter from './containers/Counter/Counter';
import './App.css';

class App extends Component {
    render() {
        return (
            //<ErrorBoundary>
                <div className="App">
                    <Counter/>
                </div>
            //</ErrorBoundary>
        );
    }
}

export default App;
