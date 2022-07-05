import { useNavigate } from "react-router-dom"
import { Nav, Navbar, Container } from 'react-bootstrap'
import { useState } from 'react';
const Header = () => {
    const navigate = useNavigate();
    const [expanded, setExpanded] = useState(false);
    return (
        <>
            <Navbar expanded={expanded ? 'false' : null} onToggle={setExpanded} bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={() => navigate('/')}>
                        <img src="src/assets/codealo.png" width="30" height="30" className="d-inline-block align-top" />{' '}
                        Codealo-comerce
                    </Navbar.Brand>
                    <Navbar.Toggle expanded={expanded ? 'false' : null} />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav
                            className="me-auto"
                            style={{ maxHeight: '100px' }}
                        >
                            <Nav.Link onClick={() => { setExpanded(false); navigate('/') }} >Inicio</Nav.Link>
                            <Nav.Link onClick={() => { setExpanded(false); navigate('/products') }} >Productos</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link onClick={() => { setExpanded(false); navigate('/login') }}>Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    )
}

export default Header;