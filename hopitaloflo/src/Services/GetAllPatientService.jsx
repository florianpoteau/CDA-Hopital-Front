import axios from 'axios';

function getAllPatients() {
    return axios.get('http://api-ecf.sarahkatz.fr/patients')
}

export default getAllPatients
