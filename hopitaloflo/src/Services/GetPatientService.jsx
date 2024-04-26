import axios from 'axios';

function getPatient(idPatient) {
    return axios.get('http://api-ecf.sarahkatz.fr/patients/' + idPatient)
}

export default getPatient
