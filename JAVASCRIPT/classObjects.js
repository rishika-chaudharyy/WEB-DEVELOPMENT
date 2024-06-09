const stu = {
    fullName: "Rishika Chaudhary",
    roll: 23,
    marks: 99,
    printMarks: function () {
        console.log(this.marks);
    },
};

const employee = {
    calcTax() {
        console.log("Tax is 10%");
    },

    calcTax2: function () {
        console.log("Same same but different")
    }
}

const KaranArjun = {
    salary: 50000
};

KaranArjun.__proto__ = employee;

//Classes

class BMW {
    constructor(brand, mileage) {
        console.log("Constructor is called")
        this.brand = brand;
        this.mileage = mileage;
    }
    start() {
        console.log("Start");
    }

    stop() {
        console.log("Stop");
    }

    setBrand(brand) {
        this.brand = brand;
    }
}

let M5 = new BMW("nice", 800);

M5.setBrand("branded")

class Parent {
    constructor() {
        console.log("Parent constructor")
    }
    hello() {
        console.log("Hello");
    }
}


class Child extends Parent {
    constructor() {
        super();
        console.log("Child constructor")
    }
    sleep() {
        console.log("Sleeps")
    }
}

let obj = new Child();



//PRACTICE QUESTIONS
//Q.1

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;

    }
    viewData() {
        console.log("Data");
    }
}

let stu1 = new User("Shraddha", "abc@gmail.com")
let stu2 = new User("Aman", "abcdef@gmail.com")
let stu3 = new User("Romi", "abcdehsnsi@gmail.com")


class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    edit() {
        console.log("Edit")
    }
}

let adm1 = new Admin("admin", "jsni@gmail.com")