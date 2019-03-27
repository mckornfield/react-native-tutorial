import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size={'large'} />;
        }
        return (
            <CardSection>
                <Button onPress={this.onButtonPress.bind(this)}>Login</Button>
            </CardSection>);
    }

    renderFailureMessage() {
        if (this.props.error) {
            return (<View style={{ backgroundColor: 'white' }}>
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
            </View>);
        }
    }

    render() {
        return (<Card>
            <CardSection>
                <Input
                    label="Email"
                    placeholder="mail@gmail.com"
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
            </CardSection>
            <CardSection>
                <Input
                    label="Password"
                    secureTextEntry
                    placeholder="*****"
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
            </CardSection>
            {this.renderFailureMessage()}
            {this.renderButton()}
        </Card >);
    }
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return {
        email,
        password,
        error,
        loading
    };
};

export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);
