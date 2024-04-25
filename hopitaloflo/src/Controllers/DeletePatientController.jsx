import deletePatient from "../Services/DeletePatient";

const deletePatientController = async (idPatient) => {
    try {
        deletePatient(idPatient)
    } catch (error) {
        console.log("erreur lors de la suppression du patient");
    }
 }

 export default deletePatientController;