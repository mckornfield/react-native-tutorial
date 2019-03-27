import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const data = {
            apiKey: "AIzaSyCMPAJV14lvEfZ9JJiDkM1RgLkp6UVxG-Y",
            authDomain: "manager-a213c.firebaseapp.com",
            databaseURL: "https://manager-a213c.firebaseio.com",
            projectId: "manager-a213c",
            storageBucket: "manager-a213c.appspot.com",
            messagingSenderId: "896042165421"
        };
        const val = firebase.initializeApp(data);
        console.log(val);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
