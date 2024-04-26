import unAssignService from "../Services/UnassignService";

const unAssignServiceController = async (patient) => {
    try {
        return unAssignService(patient)
    } catch (error) {
        console.log("erreur pour ne pas assigner d'un service");
    }
 }

 export default unAssignServiceController;