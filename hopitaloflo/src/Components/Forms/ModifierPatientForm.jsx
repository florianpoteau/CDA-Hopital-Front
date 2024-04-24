import React from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const ModifierPatientForm = () => {

    const styles = {
        button: {
            backgroundColor: "#28A745",
            border: 'none',
            opacity: '0.7'
        }
    };

    return (
        <>
            <Form className='col-10 col-md-8 mx-auto'>
                <FloatingLabel controlId="floatingInputNom" label="Nom" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputNom">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control className='p-3 text-secondary' type="text" placeholder="Poteau" />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputPrenom" label="Prénom" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputPrenom">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control className='p-3 text-secondary' type="text" placeholder="Florian" />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputSS" label="Numéro de sécurité social" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputSS">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control className='p-3 text-secondary' type="number" placeholder="XXXXXXXXXXX" />
                    </Form.Group>
                </FloatingLabel>
                    <Form.Group className="text-secondary col-10 col-md-4 mx-auto" controlId="exampleForm.ControlInputService">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Select className='p-3 text-secondary text-center'>
                            <option value="1">Urgence</option>
                            <option value="2">Pédiatrie</option>
                            <option value="3">Chirurgie</option>
                        </Form.Select>
                    </Form.Group>
                <div className='d-flex justify-content-center mt-5'>
                   <Button className='mt-4 p-2 col-5 col-md-3 pt-3 pb-3' style={styles.button}>Modifier</Button> 
                </div>
                
            </Form>
        </>
    );
};

export default ModifierPatientForm;
