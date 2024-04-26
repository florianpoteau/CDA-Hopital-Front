import axios from 'axios';

function unAssignService(patient) {
    axios.post('http://api-ecf.sarahkatz.fr/patients/unassign', patient, {
  headers: {
    'Accept': '*/*',
    'Content-Type': 'application/json'
  }
});
}

export default unAssignService;