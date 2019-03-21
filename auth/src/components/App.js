import React, { Component } from 'react';
import { View } from 'react-native';
import config from './config';
import { Button, Header, Spinner, CardSection } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
          </Button>
          </CardSection>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size={'large'} />
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"></Header>
        {this.renderContent()}
      </View>
    )
  }
}

export default App;