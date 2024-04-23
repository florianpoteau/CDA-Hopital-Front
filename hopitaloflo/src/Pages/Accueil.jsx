import React from 'react';
import Navigationbar from '../Components/Navbar/Navbar';
import { Form } from 'react-bootstrap';
import CardPatients from '../Components/Cards/CardPatients';

const Accueil = () => {
    const styles = {
        formSelect: {
            marginLeft: '2%'
        },
    };
    return (
        <>
            <Navigationbar />
            <div className='col-md-2 col-6 mb-5' style={styles.formSelect}>
            <Form.Select size="md" className='mt-5'>
                <option>Tout</option>
                <option>Urgence</option>
                <option>Pédiatrie</option>
                <option>Chirurgie</option>
            </Form.Select>   
            </div>

<div className='d-flex justify-content-around'>
    <CardPatients />
</div>


        </>
    );
};

export default Accueil;
