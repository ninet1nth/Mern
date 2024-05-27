import React, { Component } from "react";
import { Button, Container, Form, Navbar, Nav } from "react-bootstrap";
import logo from './logo.png';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contacts from "../Pages/Contacts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Write from "../Pages/Write";
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';




export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            fullName: '',
        };
    }
    componentDidMount() {
        const fullName = localStorage.getItem('fullName');
        if (fullName) {
            this.setState({ fullName, isLoggedIn: true });
        }
    }

    handleLogin = (isLoggedIn, fullName) => {
        this.setState({ isLoggedIn, fullName });
    }

    handleLogout = () => {
        // Очистите состояние
        this.setState({ isLoggedIn: false, fullName: '' });
        // Очистите localStorage
        localStorage.removeItem('fullName');
    }

    render() {
        return (
            <div className="header d-flex flex-column min-vh-100" style={{ width: '100%' }}>
                <Navbar sticky="top" collapseOnSelect expand="custom" style={{ backgroundColor: '#ffd7f8', width: '100%' }}>
                    <Container fluid>
                        <Navbar.Brand href="/" className="d-flex align-items-center">
                            <img
                                src={logo}
                                height="60"
                                width="60"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                            <h4 className="title-mobile d-inline-block align-top d-block d-md-none ml-2" style={{ color: 'black',marginTop:'30px' }}>Студия красоты и подологии</h4>
                        </Navbar.Brand>
                        <h4 className="title-pk d-inline-block align-top d-none d-md-block" style={{ color: 'black' }}>Студия красоты и подологии </h4>
                        
                        <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" style={{ color: 'white', borderColor: 'black' }} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="nav ml-auto border-bottom border-light d-md-none" style={{ flexGrow: 1, textAlign: 'center' }} >
                                <Nav.Link style={{ color: 'black' }} className="border-bottom border-light" href="/">Главная</Nav.Link>
                                <Nav.Link style={{ color: 'black' }} className="border-bottom border-light" href="/services">Услуги</Nav.Link>

                                <Nav.Link style={{ color: 'black' }} className="border-bottom border-light" href="/contacts">Контакты</Nav.Link>

                            </Nav>
                            <Nav className="nav ml-auto d-none d-md-flex" style={{ flexGrow: 1, textAlign: 'center' }} >
                                <Nav.Link style={{ color: 'black' }} href="/">Главная</Nav.Link>
                                <Nav.Link style={{ color: 'black' }} href="/services">Услуги</Nav.Link>

                                <Nav.Link style={{ color: 'black' }} href="/contacts">Контакты</Nav.Link>

                            </Nav>
                            {this.state.isLoggedIn ? (
                                <Form className="d-flex justify-content-end" style={{ flexGrow: 1, marginTop: '20px' }}>
                                    <span style={{ color: 'black', alignSelf: 'center' }}>{this.state.fullName}</span> 
                                    <Button variant="danger" onClick={this.handleLogout} style={{ marginLeft: "15px", fontSize: '26px' }}>Выйти</Button>
                                </Form>
                            ) : (
                                <Form className="d-flex justify-content-end" style={{ flexGrow: 1, marginTop: '20px' }}>
                                    <Button className="me-sm-3" variant="outline-info" href="/login" style={{ fontSize: '26px', color: 'black', backgroundColor: '#ffd7f8', borderColor: 'black' }}>Вход</Button>
                                    <Button variant="outline-info" href="/register" style={{ marginLeft: '20px', fontSize: '26px', color: 'black', backgroundColor: '#ffd7f8', borderColor: 'black' }}>Регистрация</Button>
                                </Form>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <main className="flex-grow-1"> {/*  Добавьте main элемент */}
                    <Router>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/" element={<Navigate to="/" />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/services" element={<Services />} />
                            <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
                            <Route path="/register" element={<Register onLogin={this.handleLogin} />} />
                            <Route path="/write/:serviceName" element={<Write />} />
                            <Route path="/write" element={<Write />} />
                        </Routes>
                    </Router>
                </main>
                <footer className="footer mt-auto py-3" style={{ width: '100%', textAlign: 'center', backgroundColor: '#ffd7f8' }}>
                    <div className="container">
                        <p className="m-0 text-dark">&copy; {new Date().getFullYear()} Студия красоты и подологии. Все права защищены.</p>
                        {/* Добавьте ссылки на социальные сети или другую информацию, если необходимо */}
                    </div>
                </footer>
            </div>
        );
    }
}
