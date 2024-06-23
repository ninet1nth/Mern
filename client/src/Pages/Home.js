import React, { Component } from 'react';
import Icon1 from '../Components/Icon1.png';
import Icon2 from '../Components/Icon2.png';
import Icon3 from '../Components/Icon3.png';
import Icon4 from '../Components/Icon4.png';
import Icon5 from '../Components/Icon5.png';
import Icon6 from '../Components/Icon6.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from 'react-bootstrap/Carousel';
import Image1 from '../Components/Image1.jpg';
import image1 from '../Components/image1.png';
import Image2 from '../Components/Image2.jpg';
import Image3 from '../Components/Image3.jpg';
import Card from 'react-bootstrap/Card';
import man1 from '../Components/exampleWork/man1.jpg';
import man2 from '../Components/exampleWork/man2.jpg';
import man3 from '../Components/exampleWork/man3.jpg';
import ped1 from '../Components/exampleWork/ped1.jpg';
import ped2 from '../Components/exampleWork/ped2.jpg';
import ped3 from '../Components/exampleWork/ped3.jpg';
import res1 from '../Components/exampleWork/res1.jpg';
import res2 from '../Components/exampleWork/res2.jpeg';
import res3 from '../Components/exampleWork/res3.jpg';
import pod1 from '../Components/exampleWork/pod1.jpg';
import pod2 from '../Components/exampleWork/pod2.jpg';
import pod3 from '../Components/exampleWork/pod3.jpg';
import master from '../Components/exampleWork/master.jpg';

class Home extends Component {
    render() {
        return (
            <div className='home'>
                <h1 className="annabelle" style={{ textAlign: 'center', marginTop: '20px' }}>Marynail </h1>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        style={{
                            width: '50%',
                            height: '4px',
                            backgroundColor: '#ffd7f8',
                            borderRadius: '10%'
                        }}
                    />
                </div>
                <p style={{ textAlign: 'center', marginBottom: '50px', marginTop: '30px' }}>Почему именно мы? </p>
                <div className='iconText' style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '50%', position: 'relative' }}>
                        <img src={Icon1} alt="Icon1" />
                        <p>Услуги от 500 рублей</p>
                        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '3px', backgroundColor: '#ffd7f8' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '50%', position: 'relative' }}>
                        <img src={Icon2} alt="Icon2" />
                        <p>Быстрая работа</p>

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '50%', position: 'relative' }}>
                        <img src={Icon3} alt="Icon3" />
                        <p>Время работы с 8:00 до 20:00</p>
                        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '3px', backgroundColor: '#ffd7f8' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '50%' }}>
                        <img src={Icon4} alt="Icon4" />
                        <p>Квалифицированный персонал</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '50%', position: 'relative' }}>
                        <img src={Icon5} alt="Icon5" />
                        <p>Уютная обстановка</p>
                        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '3px', backgroundColor: '#ffd7f8' }}></div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '50%' }}>
                        <img src={Icon6} alt="Icon6" />
                        <p>Качественные материалы</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '10px' }}>
                    <div
                        style={{
                            width: '50%',
                            height: '4px',
                            backgroundColor: '#ffd7f8',
                            borderRadius: '10%'
                        }}
                    />

                </div>
                <p style={{ textAlign: 'center', marginBottom: '10px' }}>Примеры работ</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div
                        style={{
                            width: '50%',
                            height: '4px',
                            backgroundColor: '#ffd7f8',
                            borderRadius: '10%'
                        }}
                    />

                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                    <Carousel className='carousel' style={{ width: '70%' }}>
                        <Carousel.Item>
                            <img
                                style={{ width: '100%', height: '900px', objectFit: 'cover' }}
                                src={Image1}
                                alt="Image1"
                            />
                            <Carousel.Caption>
                                <h3>Маникюр</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '100%', height: '900px', objectFit: 'cover' }}
                                src={Image2}
                                alt="Image2"
                            />
                            <Carousel.Caption>
                                <h3>Наращивание ресниц</h3>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                style={{ width: '100%', height: '900px', objectFit: 'cover' }}
                                src={Image3}
                                alt="Icon5"
                            />
                            <Carousel.Caption>
                                <h3>Педикюр</h3>

                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </div>

                <p style={{ textAlign: 'center', marginBottom: '10px' }}>Маникюр</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={man1} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={man2} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={man3} />
                    </Card>

                    <p style={{ textAlign: 'center', marginBottom: '10px' }}>Педикюр</p>

                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={ped1} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={ped2} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={ped3} />
                    </Card>

                    <p style={{ textAlign: 'center', marginBottom: '10px' }}>Наращивание ресниц</p>

                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={res1} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={res2} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={res3} />
                    </Card>

                    <p style={{ textAlign: 'center', marginBottom: '10px' }}>Подологические услуги</p>

                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={pod1} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={pod2} />
                    </Card>
                    <Card style={{ width: '70%', marginBottom: '40px' }}>
                        <Card.Img variant="top" src={pod3} />
                    </Card>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '10px' }}>
                    <div
                        style={{
                            width: '50%',
                            height: '4px',
                            backgroundColor: '#ffd7f8',
                            borderRadius: '10%'
                        }}
                    />

                </div>
                <p style={{ textAlign: 'center', marginBottom: '10px' }}>Наш топ мастер</p>

                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    <div
                        style={{
                            width: '50%',
                            height: '4px',
                            backgroundColor: '#ffd7f8',
                            borderRadius: '10%'
                        }}
                    />

                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Card style={{ width: '70%', marginBottom: '10px' }}>
                        <Card.Img variant="top" src={master} />
                    </Card>

                </div>
                <p style={{ textAlign: 'center', marginBottom: '1px' }}>Бабушкина Мария Олеговна</p>
                <p style={{ textAlign: 'center', marginBottom: '10px' }}>Стаж работы более 7 лет</p>
            </div>
        );
    }
}

export default Home;
