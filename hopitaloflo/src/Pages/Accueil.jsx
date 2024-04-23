import React from 'react';
import Navigationbar from '../Components/Navbar/Navbar';
import { Form } from 'react-bootstrap';
import CardPatients from '../Components/Cards/CardPatients';
import { usePatients } from '../Controllers/GetAllPatientController';

const Accueil = () => {
    const patients = usePatients();

    return (
        <>
            <Navigationbar />
            <div className='col-md-2 col-6 mb-5 ms-3 ps-md-5 ms-md-5'>
            <Form.Select size="md" className='mt-5'>
                <option>Tout</option>
                <option>Urgence</option>
                <option>Pédiatrie</option>
                <option>Chirurgie</option>
            </Form.Select>   
            </div>

<div className='d-flex justify-content-around'>
    <CardPatients patients={patients} />
</div>


        </>
    );
};

export default Accueil;
