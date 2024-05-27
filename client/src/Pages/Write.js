

import React, { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServiceForm = () => {
    const { serviceName } = useParams(); 
    const [service, setService] = useState(serviceName); 
    const [price, setPrice] = useState(''); 
    const [time, setTime] = useState('08:00'); 

    
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const [date, setDate] = useState(minDate); 

   
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    const [services, setServices] = useState([]);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        axios.get(`http://localhost:4444/dateRecording?date=${date}&time=${time}`)
            .then(response => {
                console.log(response.data);
                if (response.data.length > 0) {
                    console.log('Setting showErrorModal to true');
                    setShowErrorModal(true);
                } else {
                    const userName = localStorage.getItem('fullName');
                    axios.post('http://localhost:4444/dateRecording', { userName, serviceName: service, price, date, time })
                        .then(response => {
                            console.log(response.data);
                            setShowSuccessModal(true);
                        })
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
                setShowErrorModal(true); 
            });
    };

    useEffect(() => {
        
        axios.get('http://localhost:4444/services')
            .then(response => {
                setServices(response.data);
               
                const selectedService = response.data.find(s => s.name === service);
                if (selectedService) {
                    setPrice(selectedService.price);
                }
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, [service]);

    return (
        <div className='write' style={{ display: 'flex', justifyContent: 'center' }}>
            <Form onSubmit={handleSubmit} style={{ width: '50%', marginTop: '20px' }}>

                <Form.Group controlId="formServiceName">
                    <Form.Label>Наименование услуги</Form.Label>
                    <Form.Control style={{ border: '1px solid black',fontSize: '24px' }} as="select" value={service} onChange={(e) => setService(e.target.value)}>
                        {services.map((service, index) => (
                            <option key={service._id} value={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formServicePrice">
                    <Form.Label>Цена</Form.Label>
                    <Form.Control type="text" value={price} readOnly style={{ border: '1px solid black', backgroundColor: '#f8f9fa',fontSize: '24px' }} />
                </Form.Group>

                <Form.Group controlId="formServiceDate">
                    <Form.Label>Дата</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} min={minDate} max={maxDateStr} style={{ border: '1px solid black', backgroundColor: '#f8f9fa',fontSize: '24px' }} />
                </Form.Group>

                <Form.Group controlId="formServiceTime">
                    <Form.Label>Время</Form.Label>
                    <Form.Control style={{ border: '1px solid black' ,fontSize: '24px'}} type="time" value={time} onChange={(e) => setTime(e.target.value)} min="08:00" max="20:00" step="7200" />
                </Form.Group>


                <div style={{ display: 'flex', justifyContent: 'center' }}>

                    <Button variant="success" type="submit" style={{ marginTop: "10px" }}>
                        Записаться
                    </Button>
                </div>
            </Form>
            <Modal show={showErrorModal} onHide={() => setShowErrorModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Ошибка</Modal.Title>
            </Modal.Header>
            <Modal.Body>Время уже занято</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowErrorModal(false)}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
        <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Успех</Modal.Title>
            </Modal.Header>
            <Modal.Body>Вы успешно записались!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowSuccessModal(false)}>
                    Закрыть
                </Button>
            </Modal.Footer>
        </Modal>
        </div>
    );
};

export default ServiceForm;