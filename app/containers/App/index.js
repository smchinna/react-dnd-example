import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../../css/main.css';

class App extends React.Component {
    render() {
        return (
            <div className="row">
                {this.props.children} 
            </div>
            
        );
    }
}



export default App;
