import { useEffect, useState } from "react";
import Patient from "../Models/Patient";
import getAllPatients from "../Services/GetAllPatientService";

function usePatients() {

    const [patients, setPatient] = useState([]);

    const getPatientsController = async () => {
        try {
            let response = await getAllPatients();
            const patientsData = response.data.map((patient) => new Patient(patient.idPatient, patient.firstName, patient.lastName, patient.birthdate, patient.socialSecurityNumber));
            setPatient(patientsData);
            console.log(patientsData);
        } catch (error) {
            console.log("erreur lors du chargement des patients");
        }
    }

    useEffect(() => {
        getPatientsController();
    }, []);

    return patients;

}

export { usePatients };