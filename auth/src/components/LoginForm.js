import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        console.log(firebase.apps);
        console.log("Entering on button press");
        console.log(firebase.auth());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(this.onLoginFailure.bind(this));
    }

    onLoginSuccess(e) {
        console.log("Success")
        console.log(e);
        this.setState({ email: '', password: '', error: '', loading: false });
    }

    onLoginFailure(e) {
        const { email, password } = this.state;
        console.log("Inside first error, attempting to create email")
        console.log(e);
        this.setState({ error: 'Authentication Failed, attempting to create account' });
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch((e) => {
                console.log("Inside second error")
                console.log(e);
                this.setState({ error: 'Authentication Failed, invalid pw', loading: false });
            });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" />
        }

        return (
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>
                    Log In
            </Button>
            </CardSection>
        )
    }
    render() {
        errorSection = this.state.error ? (<Text style={styles.errorTextStyle}>
            {this.state.error}
        </Text>) : <View></View>
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        secureTextEntry={false}
                        value={this.state.email}
                        onChangeText={email => { this.setState({ email }); }}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Password"
                        placeholder="***********"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={password => { this.setState({ password }); }}
                    />
                </CardSection>
                {errorSection}
                {this.renderButton()}
            </Card>
        )
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;