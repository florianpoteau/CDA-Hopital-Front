import { useEffect, useState } from "react";
import Patient from "../Models/Patient";
import getPatient from "../Services/GetPatientService";

function usePatient(idPatient) {

    const [patient, setPatient] = useState([]);

    const getPatientController = async () => {
        try {
            let response = await getPatient(idPatient);
            const patientData = new Patient(response.data.idPatient, response.data.firstName, response.data.lastName, response.data.birthdate, response.data.socialSecurityNumber);
            setPatient(patientData);
        } catch (error) {
            console.log("erreur lors du chargement du patient" + idPatient);
        }
    }

    useEffect(() => {
        getPatientController();
    }, []);

    return patient;

}

export { usePatient };