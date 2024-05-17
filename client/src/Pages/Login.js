import React, { Component } from 'react';
import { Form, Button , Container, Alert} from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isLoggedIn: false,
            showSuccessAlert: false,
            
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = async (event) => {
      event.preventDefault();
      const { email, password } = this.state;
    
      try {
        const response = await axios.post('http://localhost:4444/login', { email, password });
        console.log(response.data);
        this.setState({ isLoggedIn: true, showSuccessAlert: true });
        // Вызовите функцию onLogin, переданную в пропсах, и передайте ей необходимые данные
        this.props.onLogin(true, response.data.fullName);
        // Сохраните имя пользователя в localStorage
        localStorage.setItem('fullName', response.data.fullName);
        setTimeout(() => {
          this.setState({ redirect: true });
        }, 2000); 
        
      } catch (error) {
        console.error(error);
        if (error.response && error.response.status === 404) {
          this.setState({ showSuccessAlert: false, showErrorAlert: true, errorMessage: 'Пользователь не найден' });
        } else if (error.response && error.response.status === 400) {
          this.setState({ showSuccessAlert: false, showErrorAlert: true, errorMessage: 'Неверный логин или пароль' });
        }
      }
    }
    
    render() {
      if (this.state.redirect) {
        return <Navigate to="/" />;
      }
      return (
        <Container style={{ maxWidth: '500px' }}>
          {this.state.showSuccessAlert && <Alert variant="success">Успешный вход!</Alert>}
          {this.state.showErrorAlert && <Alert variant="danger">{this.state.errorMessage}</Alert>}
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email адрес</Form.Label>
              <Form.Control style={{border: '1px solid black'}} type="email" placeholder="Введите email" name="email" onChange={this.handleInputChange} />
            </Form.Group>
    
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Пароль</Form.Label>
              <Form.Control style={{border: '1px solid black'}} type="password" placeholder="Пароль" name="password" onChange={this.handleInputChange} />
            </Form.Group>
    
            <Button variant="success" type="submit" style={{marginRight:"30px",marginTop:"10px"}}>
              Войти
            </Button>
            <Button variant="primary" type="submit" style={{marginRight:"30px",marginTop:"10px"}} href='/register'>
              Зарегистрироваться
            </Button>
          </Form>
        </Container>
      );
    }
}

export default Login;
