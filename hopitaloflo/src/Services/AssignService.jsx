import axios from 'axios';

function assignService(idService, patient) {
    return axios.post('http://api-ecf.sarahkatz.fr/patients/assign/' + idService, patient);
}

export default assignService;