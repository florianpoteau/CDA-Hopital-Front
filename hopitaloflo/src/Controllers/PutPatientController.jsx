import putPatient from "../Services/PutPatientService";

const PutPatientController = async (patient) => {
    try {
        putPatient(patient);
    } catch (error) {
        console.log("erreur lors du chargement des produits");
    }
 }

 export default PutPatientController;