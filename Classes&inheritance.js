console.log("Classes & inheritance");

class Employee{
    constructor(givenName, givenExperience, givenDevision){
        this.name = givenName
        this.experience = givenExperience
        this.devision = givenDevision
    }
    
    slogan(){
        return `I am ${this.name} and I am working in the ${this.devision} devision with experience of ${this.experience} years`
    }
    joiningYear(){
        return new Date().getFullYear() - this.experience
    }
    static add(a,b){
        return a+b
    }
}

console.log(Employee);

const employee1 = new Employee('Nagesh', 34, "Information Technology")

console.log(employee1);
console.log(employee1.slogan());
console.log(employee1.joiningYear());
console.log(Employee.add(23, 17));

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDevision,expertise, gitHub){
        super(givenName, givenExperience, givenDevision)
        this.expertise = expertise
        this.gitHub = gitHub
    }

    FavoriteLanguage(){
        if(this.expertise === "Python"){
            return  "Python"
        }else{
            return "JavaScript"
        }
    }

    static multiply(a,b){
        return a*b
    }
}

console.log(Programmer.multiply(10,20));
const programmer1 = new Programmer('Nishant', 38, "Information Technology", "Ruby","NIshant5465")
console.log(programmer1);
console.log(programmer1.FavoriteLanguage());
