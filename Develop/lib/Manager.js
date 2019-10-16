const Employee = require('./Employee');

class Manager extends Employee {
	/*********************
	**** Constructor *****
	*********************/

	constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        this._officeNumber = officeNumber;
        this._role = 'Office Number:'
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
    
    getRoleVar() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager"
    }
}

module.exports = Manager