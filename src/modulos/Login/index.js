import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, StyleProvider  } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

//Estilos
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

class Login extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.array
  };

  constructor (props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount(){
    //this.props.login();
  }

  handleSubmit(e){
    console.log('click');
  }

  render() {
    //console.log(this.props);
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header />
          <Content>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button id="submit" block onPress={this.handleSubmit}>
              <Text>Login</Text>
            </Button>
            </Form>
          </Content>
        </Container>
      </StyleProvider>
    );
  }
}
export default connect(state => ({
  user: state.login.user
}), actions)(Login);
