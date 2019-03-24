import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import data from './config.json';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        console.log(data);
        firebase.initializeApp(data);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View><Text style={{ fontSize: 30 }}>I love you Michele</Text></View>
            </Provider>
        );
    }
}

export default App;
