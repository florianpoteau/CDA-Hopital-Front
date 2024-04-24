import React from 'react';
import Navigationbar from '../Components/Navbar/Navbar';
import ModifierPatientForm from '../Components/Forms/ModifierPatientForm';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { usePatient } from '../Controllers/GetPatientController';

const ModifierPatient = () => {

    let { patientId } = useParams();
    console.log(patientId);
    const patient = usePatient(patientId);

    return (
        <>
        <Navigationbar />
        <Container style={{marginTop: '130px'}}>
            <h2 className='text-center mb-5'>Modifier un patient</h2>
            <ModifierPatientForm patient ={patient}/>
        </Container>
        </>
    );
};

export default ModifierPatient;