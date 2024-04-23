import axios from 'axios';

function getAllPatients() {
    return axios.get('https://api-ecf.sarahkatz.fr/patients')
}

export default getAllPatients
