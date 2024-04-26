import axios from 'axios';

function getAllBeds() {
    return axios.get('http://api-ecf.sarahkatz.fr/beds');
}

export default getAllBeds;