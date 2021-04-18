// TODO: Write code to define and export the Employee class
// this is parent class
// constructor functions using 'new'

class Employee{
    constructor(name, id, email){
        this.name= name
        this.id= id
        this.email= email
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee

// const randy = new Employee('Randy', 1, 'randy@randy.com')

// const jeff = new Employee('jeff', 5, 'jeff@jeff.com')

// jeff.getEmail()