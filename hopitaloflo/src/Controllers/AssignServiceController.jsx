import assignService from "../Services/AssignService";

const assignServiceController = async (idService, patient) => {
    try {
        assignService(idService, patient)
    } catch (error) {
        console.log("erreur pour assigner un service");
    }
 }

 export default assignServiceController;