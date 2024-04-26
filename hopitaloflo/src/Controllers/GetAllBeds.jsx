import getAllBeds from "../Services/GetAllBedService";

const useBeds = async () => {
    try {
        return getAllBeds();
    } catch (error) {
        console.log("erreur lors de la récupération de tous les lits");
    }
 }

 export default useBeds;