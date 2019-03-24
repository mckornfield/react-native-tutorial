import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
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
            <CardSection>
                <Button>Login</Button>
            </CardSection>
        </Card>);
    }
}

const mapStateToProps = state => {
    const { email, password } = state.auth;
    return {
        email,
        password
    };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
