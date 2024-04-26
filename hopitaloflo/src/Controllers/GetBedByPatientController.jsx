import { useEffect, useState } from "react";
import Bed from "../Models/Bed";
import getBedByPatient from "../Services/GetBedByPatientService";

function useBeds(idPatient) {

    const [beds, setBeds] = useState([]);

    const getBedsController = async () => {
        try {
            let response = await getBedByPatient(idPatient)
            const bedData = new Bed(response.data.idBed, response.data.patient, response.data.room);
            setBeds(bedData)
        } catch (error) {
            console.log("erreur lors du chargement des lits");
        }
    }

    useEffect(() => {
        getBedsController();
    }, [idPatient]);
    

    return beds;

}

export { useBeds };