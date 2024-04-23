import axios from 'axios';

function getBedByPatient(idPatient) {
    return axios.get('https://api-ecf.sarahkatz.fr/beds/byPatient/' + idPatient);
}

export default getBedByPatient;
