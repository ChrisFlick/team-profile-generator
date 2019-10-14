const Employee = require('./Employee');

class Engineer extends Employee {
	/*********************
	**** Constructor *****
	*********************/

	constructor(name, id, email, github) {
        super(name, id, email);
        this._github = github;
	}

	/*********************
	****** Getters *******
    *********************/
    
    get github() {
        return this._github;
    }

	/*********************
	****** Setters *******
    *********************/
    set github(hub) {
        this._github = hub;
    }

	/*********************
	****** Methods *******
    *********************/
    
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;