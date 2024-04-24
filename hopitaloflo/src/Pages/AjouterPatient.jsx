import React from 'react';
import { Container } from 'react-bootstrap';
import Navigationbar from '../Components/Navbar/Navbar';

const AjouterPatient = () => {
    return (<>
        <Navigationbar />
        <Container style={{marginTop: '130px'}}>
            <h2 className='text-center mb-5'>Ajouter un patient</h2>
        </Container>
        </>
    );
};

export default AjouterPatient;