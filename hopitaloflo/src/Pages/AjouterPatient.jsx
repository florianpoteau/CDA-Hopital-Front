import React from 'react';
import { Container } from 'react-bootstrap';
import Navigationbar from '../Components/Navbar/Navbar';
import AjouterPatientForm from '../Components/Forms/AjouterPatientForm';

const AjouterPatient = () => {
    return (<>
        <Navigationbar />
        <Container style={{marginTop: '130px'}}>
            <h2 className='text-center mb-5'>Ajouter un patient</h2>
        </Container>
        <AjouterPatientForm />
        </>
    );
};

export default AjouterPatient;