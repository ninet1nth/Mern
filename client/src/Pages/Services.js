import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';




class Services extends Component {
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Card style={{ width: '50%', marginBottom: '20px' }}>
                    <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=d00d202f15a6f9fd02a079f411c0fa8ca841fb64-11865037-images-thumbs&n=13" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Заголовок карточки</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item style={{ overflow: 'auto', maxHeight: '150px' }}>Описание маникюра паввапвапвапвапвапвапавпвапавпвапвапавпвапааааааааааааааааааааааааааааааааааполавчпошавыпгеывкапшгывадгшпвгдшпгваыпывпгаыпшывашдпывдапывшанпшнваыпвыагшпваыипшващпавиышдпыавшщпваышдыва</ListGroup.Item>
                    </ListGroup>
                    <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" href="/write" style={{ marginRight: '40px' }}>Записаться</Button>
                        <Button variant="secondary" href="#">Подробнее об услуге</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '50%' }}>
                    <Card.Img variant="top" src="https://avatars.mds.yandex.net/i?id=d00d202f15a6f9fd02a079f411c0fa8ca841fb64-11865037-images-thumbs&n=13" />
                    <Card.Body>
                        <Card.Title style={{ textAlign: 'center' }}>Заголовок карточки</Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item style={{ overflow: 'auto', maxHeight: '150px' }}>Описание маникюра паввапвапвапвапвапвапавпвапавпвапвапавпвапааааааааааааааааааааааааааааааааааполавчпошавыпгеывкапшгывадгшпвгдшпгваыпывпгаыпшывашдпывдапывшанпшнваыпвыагшпваыипшващпавиышдпыавшщпваышдыва</ListGroup.Item>
                    </ListGroup>
                    <Card.Body style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="primary" href="/write" style={{ marginRight: '40px' }}>Записаться</Button>
                        <Button variant="secondary" href="#">Подробнее об услуге</Button>
                    </Card.Body>
                </Card>
                
            </div>






        );
    }
}

export default Services;
