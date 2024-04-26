class Patient {
    constructor(idPatient, firstName, lastName, birthdate, socialSecurityNumber, createdAt){
        this.idPatient = idPatient;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.socialSecurityNumber = socialSecurityNumber;
        this.createdAt = createdAt;
        this.modifiedAt = new Date();
    }
}


export default Patient;