import React from 'react';
import Navigationbar from '../Components/Navbar/Navbar';
import { Form } from 'react-bootstrap';
import CardPatients from '../Components/Cards/CardPatients'; // Importez le composant CardPatients
import { usePatients } from '../Controllers/GetAllPatientController';
import { useServices } from '../Controllers/GetAllServiceController';

const Accueil = () => {
    const patients = usePatients();
    const services = useServices();

    console.log();

    return (
        <>
            <Navigationbar />
            <div className='col-md-2 col-6 mb-5 ms-5 ps-md-5 ms-md-5 '>
                <Form.Select size="md" className='mt-5'>
                    <option>Rechercher par service</option>
                    {services.map((service) => {
                        return <option>{service.name}</option>
                    })}
                </Form.Select>   
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {patients.map((patient) => (
                    <CardPatients key={patient.idPatient} patient={patient} />
                ))}
            </div>
        </>
    );
};

export default Accueil;
