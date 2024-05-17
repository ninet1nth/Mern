import React, { Component } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
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
        const { fullName,email, password } = this.state;
        

        // Отправка данных на сервер
        try {
            const response = await axios.post('http://localhost:4444/register', { fullName, email, password });
            console.log(response.data);
            this.setState({ showSuccessAlert: true });

            setTimeout(() => {
                this.setState({ isLoggedIn: true });
                // Вызовите функцию onLogin, переданную в пропсах, и передайте ей необходимые данные
                this.props.onLogin(true, response.data.fullName);
                // Сохраните имя пользователя в localStorage
                localStorage.setItem('fullName', response.data.fullName);
            }, 2000); // Задержка в 2 секунды
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Navigate to="/" />;
        }

        return (
            <Container style={{ maxWidth: '500px' }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicFullName">
                        <Form.Label>ФИО</Form.Label>
                        <Form.Control style={{border: '1px solid black'}} type="text" placeholder="Введите ФИО" name="fullName" onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control style={{border: '1px solid black'}} type="email" placeholder="Введите email" name="email" onChange={this.handleInputChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control style={{border: '1px solid black'}} type="password" placeholder="Пароль" name="password" onChange={this.handleInputChange} />
                    </Form.Group>

                    <Button variant="success" type="submit" style={{ marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}>
                        Зарегистрироваться
                    </Button>
                    {this.state.showSuccessAlert && <Alert variant="success">Успешная регистрация!</Alert>}
                </Form>
            </Container>
        );
    }
}

export default Register;
