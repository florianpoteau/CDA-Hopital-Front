import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useBeds } from '../../Controllers/GetBedByPatient';

const CardPatients = ({ patient }) => {

    const bed = useBeds(patient.idPatient);

    return (
                <Card style={{ width: '25rem' }} className="m-2 mb-5 mt-3 me-5 mx-5">
                    <Card.Body>
                        {/* setPatientId lors du rendu du patient */}
                        <Card.Title className='mb-4'>{patient.lastName} - {patient.firstName}</Card.Title>
                        <Card.Text className='mb-4'>
                            Date de naissance: {patient.birthdate}
                        </Card.Text>
                        <Card.Text className='mb-4'>
                            Numéro de sécurité sociale: {patient.socialSecurityNumber}
                        </Card.Text>

                            {bed.room && bed.room.service && (
                                <Card.Text>
                                    Service: {bed.room.service.name}
                                </Card.Text>
                            )}
                        
                    </Card.Body>
                </Card>
    );
};

export default CardPatients;
