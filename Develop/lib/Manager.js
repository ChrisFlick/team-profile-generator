const Employee = require('./Employee');

class Manager extends Employee {
	/*********************
	**** Constructor *****
	*********************/

	constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this._officeNumber = officeNumber;
	}

	/*********************
	****** Getters *******
    *********************/
    
    get officeNumber() {
        return this._officeNumber;
    }

	/*********************
	****** Setters *******
    *********************/
    
    set officeNumber(num) {
        this._officeNumber = num;
    }

	/*********************
	****** Methods *******
    *********************/
    
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager