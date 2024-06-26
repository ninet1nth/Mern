import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Modal } from 'react-bootstrap';
import axios from 'axios';

class Services extends Component {
    state = {
        services: [],
        showModal: false
    }

    componentDidMount() {
        axios.get('http://localhost:4444/services')
            .then(res => {
                const services = res.data;
                this.setState({ services });
            })
    }
    handleButtonClick = (serviceName) => {
        const userName = localStorage.getItem('fullName');
        if (userName) {
            window.location.href = `/write/${serviceName}`;
        } else {
            this.setState({ showModal: true });
        }
    }

    handleClose = () => {
        this.setState({ showModal: false });
    }

    handleLogin = () => {
        window.location.href = "/login";
    }

    render() {
        return (
            <div className="services" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {this.state.services.map(service => (
                    <Card key={service._id} style={{ width: '50%', marginBottom: '20px', marginTop: "20px" }}>
                        <Card.Img variant="top" src={service.img} />
                        <Card.Body>
                            <Card.Title className='serviceName' style={{ textAlign: 'center' }}><h1>{service.name}</h1></Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item style={{ overflow: 'auto', maxHeight: '250px' }}>{service.description}</ListGroup.Item>
                            <ListGroup.Item style={{ overflow: 'auto', maxHeight: '150px' }}>Цена:{service.price}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className='serviceButton' style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button className='serviceButton1' variant="primary" onClick={() => this.handleButtonClick(service.name)} style={{ marginRight: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px' ,width:'80%'}}>Записаться</Button>
                            
                        </Card.Body>
                    </Card>
                ))}
                <Modal show={this.state.showModal} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{ width: '100%', textAlign: 'center' }}>Вход в систему</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ textAlign: 'center' }}>Пожалуйста, войдите в систему!</Modal.Body>
                    <Modal.Footer style={{ justifyContent: 'center' }}>
                        <Button variant="primary" onClick={this.handleLogin}>
                            Войти
                        </Button>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Закрыть
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Services;
