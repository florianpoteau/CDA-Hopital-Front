import axios from 'axios';

function deletePatient(idPatient) {
    return axios.delete('https://api-ecf.sarahkatz.fr/patients/' + idPatient);
}

export default deletePatient;