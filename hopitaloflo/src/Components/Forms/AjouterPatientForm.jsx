import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import postPatientController from '../../Controllers/PostPatientController';
import { useNavigate } from 'react-router-dom';

const AjouterPatientForm = () => {
    const navigate = useNavigate();

    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [birthdate, setBirthDate] = useState("");
    const [socialSecurityNumber, setSocialSecurityNumber] = useState("");

    const postPatientAndAssignService = async () => {
    try {
        const updatedPatient = {
            firstName: firstName,
            lastName: lastName,
            birthdate: birthdate,
            socialSecurityNumber: socialSecurityNumber
        };

        await postPatientController(updatedPatient);
        navigate("/");

    } catch (error) {
        console.log("Erreur lors de l'ajout du patient");
    }
}

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
                        <Form.Control onChange={(e) => setLastname(e.target.value)} className='p-3 text-secondary' type="text" placeholder="Entrez le nom du patient" />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputPrenom" label="Prénom" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputPrenom">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control onChange={(e) => setFirstname(e.target.value)} className='p-3 text-secondary' type="text" placeholder="Entrez le prénom du patient" />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputBirthDate" label="Birthdate" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputBirthDate">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control onChange={(e) => setBirthDate(e.target.value)} className='p-3 text-secondary' type="text" placeholder="Entrez la date de naissance du patient" />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputSS" label="Numéro de sécurité social" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputSS">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control onChange={(e) => setSocialSecurityNumber(e.target.value)} className='p-3 text-secondary' type="number" placeholder="Entrez le numéro de sécurité social" />
                    </Form.Group>
                </FloatingLabel>
                <div className='d-flex justify-content-center mt-5'>
                   <Button onClick={postPatientAndAssignService} className='mt-4 p-2 col-5 col-md-3 pt-3 pb-3' style={styles.button}>Enregistrer</Button>
                </div>
                
            </Form>
        </>
    );
};

export default AjouterPatientForm;