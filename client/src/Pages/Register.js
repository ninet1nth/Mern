

import React, { Component } from 'react';
import { Form, Button, Container, Alert, Modal } from 'react-bootstrap';
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
            showErrorModal: false,
            validationErrors: {}
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    validateForm = () => {
        const { fullName,  password } = this.state;
        let validationErrors = {};

        if (!fullName || fullName.length < 3) {
            validationErrors.fullName = 'Укажите имя минимум 3 символа';
        }

        

        if (!password || password.length < 5) {
            validationErrors.password = 'Пароль должен содержать минимум 5 символов';
        }

        this.setState({ validationErrors });
        return Object.keys(validationErrors).length === 0;
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            const { fullName, email, password } = this.state;
            try {
                const response = await axios.post('http://localhost:4444/register', { fullName, email, password });
                console.log(response.data);
                this.setState({ showSuccessAlert: true });
                setTimeout(() => {
                    this.setState({ isLoggedIn: true });
                    this.props.onLogin(true, response.data.fullName);
                    localStorage.setItem('fullName', response.data.fullName);
                }, 2000);
            } catch (error) {
                console.error(error);
                if (error.response && error.response.status === 500) {
                    this.setState({ showErrorModal: true });
                }
            }
        }
    }

    handleClose = () => this.setState({ showErrorModal: false });

    render() {
        if (this.state.isLoggedIn) {
            return <Navigate to="/" />;
        }

        return (
            <Container style={{ maxWidth: '500px' }}>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicFullName">
                        <Form.Label>Имя</Form.Label>
                        <Form.Control style={{border: '1px solid black',fontSize: '28px'}} type="text" placeholder="Введите ФИО" name="fullName" onChange={this.handleInputChange} isInvalid={!!this.state.validationErrors.fullName} />
                        <Form.Control.Feedback type="invalid">{this.state.validationErrors.fullName}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email адрес</Form.Label>
                        <Form.Control style={{border: '1px solid black',fontSize: '28px'}} type="email" placeholder="Введите email" name="email" onChange={this.handleInputChange} isInvalid={!!this.state.validationErrors.email} />
                        <Form.Control.Feedback type="invalid">{this.state.validationErrors.email}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control style={{border: '1px solid black' ,fontSize: '28px'}} type="password" placeholder="Введите пароль" name="password" onChange={this.handleInputChange} isInvalid={!!this.state.validationErrors.password} />
                        <Form.Control.Feedback type="invalid">{this.state.validationErrors.password}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="success" type="submit" style={{ marginTop: '10px', display: 'block', marginLeft: 'auto', marginRight: 'auto' ,fontSize:'26px'}}>
                        Зарегистрироваться
                    </Button>
                    {this.state.showSuccessAlert && <Alert variant="success">Успешная регистрация!</Alert>}
                </Form>

                <Modal show={this.state.showErrorModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ошибка</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Email уже зарегистрирован</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        );
    }
}

export default Register;