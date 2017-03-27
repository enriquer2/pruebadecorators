import { sealed, logger, writable } from './decofinal';

class Employee {

    addToSchedule() {
        console.log('Employee added to schedule.');
    }

    logTitle() {
        console.log(`Employee has the title ${this.title}.`);
    }
}

class Researcher {

    doResearch(topic) {
        console.log(`Doing research on ${topic}.`);
    }
}

@logger
@sealed('UniversityLibrarian')
class UniversityLibrarian {

    constructor(name) {
        this._name = name;
    }

    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }

    //    @writable(true)
    assistFaculty() {
        console.log('Assisting faculty.');
    }
}

let instance = new UniversityLibrarian();
console.log('R2');