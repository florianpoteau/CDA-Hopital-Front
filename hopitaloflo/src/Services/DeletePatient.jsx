import axios from 'axios';

function deletePatient(idPatient) {
    return axios.delete('http://api-ecf.sarahkatz.fr/patients/' + idPatient);
}

export default deletePatient;