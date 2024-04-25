import React, { useState } from 'react';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import putPatientController from '../../Controllers/PutPatientController';
import { useServices } from '../../Controllers/GetAllServiceController';
import assignServiceController from '../../Controllers/AssignServiceController';
import unAssignServiceController from '../../Controllers/UnAssignServiceController';

const ModifierPatientForm = ({patient}) => {

    const services = useServices();

    const [idService, setIdService] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [socialSecurityNumber, setSocialSecurityNumber] = useState("");

    const putPatient = async () => {
        try {
            const updatedPatient = {
                idPatient: patient.idPatient,
                firstName: firstName,
                lastName: lastName,
                birthdate: patient.birthdate,
                socialSecurityNumber: socialSecurityNumber
            };

            await putPatientController(updatedPatient);
            
            if (idService) {
                await assignServiceController(idService, updatedPatient);
            } else {
                await unAssignServiceController(updatedPatient);
            }

            console.log(updatedPatient);

        } catch (error) {
            console.log("Erreur lors de la modification du patient");
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
                        <Form.Control onChange={(e) => setLastname(e.target.value)} className='p-3 text-secondary' type="text" placeholder={patient.lastName} />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputPrenom" label="Prénom" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputPrenom">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control onChange={(e) => setFirstname(e.target.value)} className='p-3 text-secondary' type="text" placeholder={patient.firstName} />
                    </Form.Group>
                </FloatingLabel>
                <FloatingLabel controlId="floatingInputSS" label="Numéro de sécurité social" className="text-secondary">
                    <Form.Group controlId="exampleForm.ControlInputSS">
                        <Form.Label className='mt-3'></Form.Label>
                        <Form.Control onChange={(e) => setSocialSecurityNumber(e.target.value)} className='p-3 text-secondary' type="number" placeholder={patient.socialSecurityNumber} />
                    </Form.Group>
                </FloatingLabel>
                <Form.Group className="text-secondary col-10 col-md-4 mx-auto" controlId="exampleForm.ControlInputService">
                    <Form.Label className='mt-3'></Form.Label>
                    <Form.Select onChange={(e) => setIdService(e.target.value)} className='p-3 text-secondary text-center'>
                        <option value={null}>Aucun service</option>
                        {services.map((service, index) => {
                            return <option key={index} value={service.idService}>{service.name}</option>;
                        })}
                    </Form.Select>
                </Form.Group>
                <div className='d-flex justify-content-center mt-5'>
                   <Button onClick={putPatient} className='mt-4 p-2 col-5 col-md-3 pt-3 pb-3' style={styles.button}>Modifier</Button> 
                </div>
            </Form>
        </>
    );
};

export default ModifierPatientForm;
