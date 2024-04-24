import React from 'react';
import Navigationbar from '../Components/Navbar/Navbar';
import ModifierPatientForm from '../Components/Forms/ModifierPatientForm';
import { Container } from 'react-bootstrap';

const ModifierPatient = () => {

    return (
        <>
        <Navigationbar />
        <Container style={{marginTop: '130px'}}>
            <h2 className='text-center mb-5'>Modifier un patient</h2>
            <ModifierPatientForm />
        </Container>
        </>
    );
};

export default ModifierPatient;