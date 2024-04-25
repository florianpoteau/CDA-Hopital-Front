import axios from 'axios';

function getAllServices() {
    return axios.get('http://api-ecf.sarahkatz.fr/services')
}

export default getAllServices;
