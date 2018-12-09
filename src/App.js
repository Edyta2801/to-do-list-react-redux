import React, {Component} from 'react';
import ToDoList from './components/ToDoList'
import AppBar from './components/AppBar'

class App extends Component {
    render() {
        return (
            <div>
                <AppBar/>
                <ToDoList/>
            </div>
        );
    }
}

export default App;