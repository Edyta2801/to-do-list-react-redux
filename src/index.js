import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import   {store}   from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
<Provider store={store}>
<MultiThemeProvider><App />
</MultiThemeProvider>
</Provider>, 
document.getElementById('root'));
