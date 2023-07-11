class Employee {
    constructor(name,type) {
        this.name = name;
        this.type = type;
    }
    whatIDo (){
        console.log("I am " + this.name+ " and I am just an employee!!");
    }
}
class Developer extends Employee{
    constructor(name,type){
        super(name,type);
    }
    whatIDo()
    {
        console.log("I am " + this.name+ " and I am a developer!!");
    }
}
class Tester extends Employee{
    constructor(name,type){
        super(name,type);
    }
    whatIDo(){
        console.log("I am " + this.name+ " and I am a tester!!");
    }
}

class EmployeeFactory{
    create (name,type){
        switch(type){
            case "Developer":
                return new Developer(name,type)
                break;
            case "Tester":
                return new Tester(name,type)
                break;
        }
    }
}
employeeFactory = new EmployeeFactory()
const employee = []
employee.push(employeeFactory.create("Hammad","Tester"));
employee.push(employeeFactory.create("Ali","Developer"));

employee.forEach( emp => {
    emp.whatIDo(); 
})