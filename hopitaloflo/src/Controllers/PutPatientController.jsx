import putPatient from "../Services/PutPatientService";

const putPatientController = async (patient) => {
    try {
        putPatient(patient);
    } catch (error) {
        console.log("erreur lors de la mise a jour du patient");
    }
 }

 export default putPatientController;