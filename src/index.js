import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './store'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {Provider} from 'react-redux'
import * as firebase from './firebase'
import Auth from './components/Auth'




ReactDOM.render(
    <Provider store={store}>
        <MultiThemeProvider>
            <Auth>
                <App/>
            </Auth>

        </MultiThemeProvider>
    </Provider>,
    document.getElementById('root')
)