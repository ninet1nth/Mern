import React, { Component } from "react";
import { Button, Container, Form, Navbar, Nav} from "react-bootstrap";
import logo from './logo.png';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contacts from "../Pages/Contacts";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Write from "../Pages/Write";


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
            <>
                <Navbar sticky="top" collapseOnSelect expand="md" bg="dark" variant="dark" >
                    <Container fluid>
                        <Navbar.Brand href="/" >
                            <img
                                src={logo}
                                height="60"
                                width="60"
                                className="d-inline-block align-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        <h4 className="d-inline-block align-top d-none d-md-block" style={{ color: 'white', marginRight: '150px' }}>Студия красоты и падологии</h4>
                        <h4 className="d-inline-block align-top d-block d-md-none text-center w-90" style={{ color: 'white' }}>Студия красоты и падологии</h4>
                        <Navbar.Toggle className="navbar-toggle" aria-controls="responsive-navbar-nav" style={{ color: 'white', borderColor: 'white' }} />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="ml-auto border-bottom border-light d-md-none" style={{ flexGrow: 1, textAlign: 'center' }} >
                                <Nav.Link className="border-bottom border-light" href="/">Главная</Nav.Link>
                                <Nav.Link className="border-bottom border-light" href="/about">Мои работы</Nav.Link>
                                <Nav.Link className="border-bottom border-light" href="/contacts">О нас</Nav.Link>
                                <Nav.Link className="border-bottom border-light" href="/services">Услуги</Nav.Link>
                            </Nav>
                            <Nav className="ml-auto d-none d-md-flex" style={{ flexGrow: 1, textAlign: 'center' }} >
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/about">Мои работы</Nav.Link>
                                <Nav.Link href="/contacts">О нас</Nav.Link>
                                <Nav.Link href="/services">Услуги</Nav.Link>
                            </Nav>
                            {this.state.isLoggedIn ? (
                                <Form className="d-flex justify-content-end" style={{ flexGrow: 1, marginTop: '20px' }}>
                                    <span style={{ color: 'white', alignSelf: 'center' }}>{this.state.fullName}</span>
                                    <Button variant="danger" onClick={this.handleLogout} style={{marginLeft:"15px"}}>Выйти</Button>
                                </Form>
                            ) : (
                                <Form className="d-flex justify-content-end" style={{ flexGrow: 1, marginTop: '20px' }}>
                                    <Button className="me-sm-3" variant="outline-info" href="/login">Вход</Button>
                                    <Button variant="outline-info" href="/register">Регистрация</Button>
                                </Form>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/" element={<Navigate to="/" />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/login" element={<Login onLogin={this.handleLogin} />} />
                        <Route path="/register" element={<Register onLogin={this.handleLogin} />} />
                        <Route path="/write/:serviceName" element={<Write/>} />
                        <Route path="/write" element={<Write/>} />
                        
                        
                    </Routes>
                </Router>
            </>
        );
    }
}
