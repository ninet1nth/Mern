import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServiceForm = () => {
    const { serviceName } = useParams(); // Получаем имя услуги из URL
    const [service, setService] = useState(serviceName); // Устанавливаем имя услуги как начальное значение
    const [time, setTime] = useState('08:00'); // Установка времени по умолчанию на 8:00

    // Получаем текущую дату
    const today = new Date();
    const minDate = today.toISOString().split('T')[0];
    const [date, setDate] = useState(minDate); // Установка даты по умолчанию на сегодня

    // Добавляем 14 дней к текущей дате
    const maxDate = new Date();
    maxDate.setDate(today.getDate() + 14);
    const maxDateStr = maxDate.toISOString().split('T')[0];

    const [services, setServices] = useState([]);
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Получаем имя пользователя из localStorage
        const userName = localStorage.getItem('fullName');

        // Отправляем данные на сервер
        axios.post('http://localhost:4444/dateRecording', { userName, serviceName: service, date, time })
            .then(response => {
                console.log(response.data);
                // Обработка успешного ответа
            })
            .catch(error => {
                console.error('There was an error!', error);
                // Обработка ошибки
            });
    };

    useEffect(() => {
        // Получаем услуги из базы данных
        axios.get('http://localhost:4444/services')
            .then(response => {
                setServices(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
            <Form onSubmit={handleSubmit} style={{width: '50%', marginTop: '20px'}}>
                <Form.Group controlId="formServiceName">
                    <Form.Label>Наименование услуги</Form.Label>
                    <Form.Control style={{border: '1px solid black'}} as="select" value={service} onChange={(e) => setService(e.target.value)}>
                        {services.map((service, index) => (
                            <option key={service._id} value={service.name}>
                                {service.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="formServiceDate">
                    <Form.Label>Дата</Form.Label>
                    <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} min={minDate} max={maxDateStr} style={{border: '1px solid black', backgroundColor: '#f8f9fa'}} />
                </Form.Group>

                <Form.Group controlId="formServiceTime">
                    <Form.Label>Время</Form.Label>
                    <Form.Control style={{border: '1px solid black'}} type="time" value={time} onChange={(e) => setTime(e.target.value)} min="08:00" max="20:00" step="7200" />
                </Form.Group>

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    
                    <Button variant="success" type="submit" style={{marginTop:"10px"}}>
                        Записаться
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default ServiceForm;
