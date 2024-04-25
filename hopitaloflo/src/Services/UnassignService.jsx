import axios from 'axios';

function unAssignService(patient) {
    return axios.post('http://api-ecf.sarahkatz.fr/patients/unassign/', patient);
}

export default unAssignService;