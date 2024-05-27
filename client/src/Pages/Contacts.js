import React, { Component } from 'react';
import map from '../Components/exampleWork/map.png'
import map1 from '../Components/exampleWork/map1.jpg'
import Card from 'react-bootstrap/Card';
class Contacts extends Component {
    render() {
        return (
            <div className='contacts' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',fontSize:'24px' }}>
                
                
                <p style={{ marginTop: '30px'}}>Мы находимся по адрессу:</p>
                <p >Город Барнаул, улица: Взлётная 33 корпус 5</p>
                <p >Телефон для справок:</p>
                <p >8-923-545-01-00</p>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img className='pk-img' variant="top" src={map} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img className='mob-img' variant="top" src={map1} />
                    </Card>
                    
                </div>
                
            
        );
    }
}

export default Contacts;
