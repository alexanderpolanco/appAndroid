import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text, StyleProvider, Icon} from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// Actions
import * as actions from './actions';

// Utils
import { isUser } from '../../lib/utils';

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

    this.state = {
      usuario: '',
      validUsuario: true
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleInputChanged(e){
    //var accion = e.target.id;
    //var valor = e.target.value;
    console.log(this.state.usuario);
    // switch (accion) {
    //   case 'usuario':
    //     this.setState({
    //       usuario: valor
    //     });
    //     break;
    //   default:
    // }
  }

  validate(text,type) {
    switch (type) {
      case 'usuario':
        if(!isUser(text)){
          this.setState({validUsuario:false});
        }
        console.log('tipeado',text);
        console.log('validacion',isUser(text));
        break;
      default:

    }
  }
componentWillMount() {

}

  handleSubmit(e){
    console.log(this.state.usuario);
    this.props.login();
  }

  render() {
    console.log(this.props);
    return (
      <StyleProvider style={getTheme(platform)}>
        <Container>
          <Header />
          <Content>
            <Form>
              <Item floatingLabel success>
                <Label>Username</Label>
                <Input onChangeText={(text) => this.validate(text,'usuario')} />
                <Icon name='checkmark-circle' />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input id="clave" />
              </Item>
              <Button block onPress={this.handleSubmit}>
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
