import axios from 'axios';

function getAllServices() {
    return axios.get('https://api-ecf.sarahkatz.fr/services')
}

export default getAllServices;
