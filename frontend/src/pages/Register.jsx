import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import { Button, Form, Stack } from "react-bootstrap";

import '../styles/Login.css';

const Register = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();

    const handelsubmit = event => {
        event.preventDefault();

        navigateTo("/")
    }

    return (
        <section className="contLogin">
            <div className="login">
                <h2>Registrate</h2>
                <Form onSubmit={handelsubmit}>
                    <Form.Group className="mb-3">
                        <Form.Control type="text" placeholder="Usuario" onChange={(e) => setUserName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Control type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <Stack gap={2} className="contButonsLogin">
                        <button type="submit" className="btonlogin">
                            Iniciar sesion
                        </button>
                        <button className="btonlogin" onClick={() => navigate("/register")}>
                            Registrate
                        </button>
                    </Stack>
                </Form>
            </div>

        </section>
    )
}

export default Register;