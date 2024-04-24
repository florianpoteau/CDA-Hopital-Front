import axios from 'axios';

function getPatient(idPatient) {
    return axios.get('https://api-ecf.sarahkatz.fr/patients/' + idPatient)
}

export default getPatient
