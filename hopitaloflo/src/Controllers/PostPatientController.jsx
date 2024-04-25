import postPatient from "../Services/PostPatientService";

const postPatientController = async (patient) => {
    try {
        postPatient(patient);
    } catch (error) {
        console.log("erreur lors du chargement des patients");
    }
 }

 export default postPatientController;