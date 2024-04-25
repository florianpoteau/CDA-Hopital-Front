import assignService from "../Services/AssignService";

const assignServiceController = async (idService, patient) => {
    try {
        assignService(idService, patient)
    } catch (error) {
        console.log("erreur lors du chargement des produits");
    }
 }

 export default assignServiceController;