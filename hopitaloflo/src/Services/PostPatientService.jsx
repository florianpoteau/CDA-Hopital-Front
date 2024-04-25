import axios from 'axios';

function postPatient(patient) {
    return axios.post('http://api-ecf.sarahkatz.fr/patients', patient);
}

export default postPatient;