import { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

export const ResumeButton = ({ className }) => {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleLogin = () => {
        // Gérer la connexion ici
        console.log("Username:", username, "Password:", password);
        // Pour le moment, nous fermerons juste le modal
        handleClose();
    }

    return (
        <>
            <Button className={className} onClick={handleShow}>
                Mon Compte
            </Button>
            <Modal size="lg" show={show} onHide={handleClose} centered className="modern-modal">
                <Modal.Header closeButton className='close-button'>
                    <Modal.Title>Connectez vous à votre compte Tam</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: '#black' }}> {/* Ajoutez un fond ici */}
                    <Form>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Identifiant</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="" 
                                value={username} 
                                onChange={(e) => setUsername(e.target.value)} 
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control 
                                type="password" 
                                placeholder="" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </Form.Group>

                        <Button variant="primary" onClick={handleLogin} style={{ marginTop: '20px' }}> {/* Espacement du bouton */}
                            Login
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};