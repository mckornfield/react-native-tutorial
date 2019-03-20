import React, { Component } from 'react';
import { Text, View } from 'react-native';
import config from './config';
import { Header } from './common';
import firebase from 'firebase';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        <Text>A SINGLE APP!</Text>
      </View>
    )
  }
}

export default App;