import deletePatient from "../Services/DeletePatient";

const deletePatientController = async (idPatient) => {
    try {
        return deletePatient(idPatient);
    } catch (error) {
        console.log("erreur lors de la suppression du patient");
        throw error;
    }
}

export default deletePatientController;
