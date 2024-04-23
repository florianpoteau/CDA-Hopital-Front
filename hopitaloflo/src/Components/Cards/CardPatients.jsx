import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';

const CardPatients = ({patients}) => {
    return (
            <Row className="d-flex flex-wrap justify-content-center">
                {patients.map((patient, index) => (
                    <Card key={index} style={{ width: '25rem' }} className="m-2 mb-5 mt-3">
                    <Card.Body>
                        <Card.Title>{patient.lastName} - {patient.firstName}</Card.Title>
                        <Card.Text>
                            Date de naissance: {patient.birthdate}
                        </Card.Text>
                        <Card.Text>
                            Numéro de sécurité social: {patient.socialSecurityNumber}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                ))}
                
            </Row>
    );
};

export default CardPatients;
