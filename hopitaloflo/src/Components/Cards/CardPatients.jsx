import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useBeds } from '../../Controllers/GetBedByPatientController';
import { Link } from 'react-router-dom';
import deletePatientController from '../../Controllers/DeletePatientController';

const CardPatients = ({ patient }) => {

    const bed = useBeds(patient.idPatient);

    const handleDeletePatient = async () => {
        try {
            await deletePatientController(patient.idPatient);
            window.location.reload();
        } catch (error) {
            console.error("Erreur lors de la suppression du patient :", error);
        }
    };

    return (
        <Card style={{ width: '25rem' }} className="m-2 mb-5 mt-3 me-5 mx-5">
            <Card.Body>
                <Card.Title className='mb-4'>{patient.lastName} - {patient.firstName}</Card.Title>
                <Card.Text className='mb-4'>
                    Date de naissance: {patient.birthdate}
                </Card.Text>
                <Card.Text className='mb-4'>
                    Numéro de sécurité sociale: {patient.socialSecurityNumber}
                </Card.Text>
                {bed.room && bed.room.service ? (
                    <Card.Text className='mb-4'>
                        Service: {bed.room.service.name}
                    </Card.Text>
                ) : (
                    <Card.Text className='mb-4 text-muted'>
                        Ce patient n'est pas assigné à un service.
                    </Card.Text>
                )}
                <div className='d-flex justify-content-between'>
                    <Link to={`/${patient.idPatient}/modifierPatient`}>
                        <Button variant="success">Modifier</Button>
                    </Link>
                    <Button onClick={handleDeletePatient} variant="danger">Supprimer</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default CardPatients;
