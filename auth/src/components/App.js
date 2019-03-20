import React, { Component } from 'react';
import { View } from 'react-native';
import config from './config';
import { Header } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <LoginForm />
      </View>
    )
  }
}

export default App;