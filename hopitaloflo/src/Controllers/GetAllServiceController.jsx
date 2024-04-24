import { useEffect, useState } from "react";
import Service from "../Models/Service";
import getAllServices from "../Services/GetAllService";

function useServices() {

    const [services, setServices] = useState([]);

    const getServicesController = async () => {
        try {
            let response = await getAllServices();
            const servicesData = response.data.map((service) => new Service(service.idService, service.name));
            setServices(servicesData);
            console.log(servicesData);
        } catch (error) {
            console.log("erreur lors du chargement des services");
        }
    }

    useEffect(() => {
        getServicesController()
    }, []);

    return services;

}

export { useServices };