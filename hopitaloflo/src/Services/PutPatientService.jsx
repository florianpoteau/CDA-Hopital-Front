import axios from 'axios';

function putPatient(patient) {
    return axios.put('http://api-ecf.sarahkatz.fr/patients', patient);
}

export default putPatient;