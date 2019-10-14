const Employee = require('./Employee');

class Intern extends Employee {
	/*********************
	**** Constructor *****
	*********************/

	constructor(name, id, email, school) {
        super(name, id, email);
        this._school = school;
	}

	/*********************
	****** Getters *******
    *********************/
    get school() {
        return this._school;
    }

	/*********************
	****** Setters *******
    *********************/
    set school(school) {
        this._school = school;
    }

	/*********************
	****** Methods *******
    *********************/
    
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern"
    }
}

module.exports = Intern