function getTotal(numbers: Array<number>): number {
    return numbers.reduce((acc, item) => acc + item, 0);
}

console.log(getTotal([3, 2, 1])); // Output: 6


//TYPE ALIAS AND CUSTOM TYPE

type User = {
    FirstName: string;
    age: number;
    address?: string;
}

const user: User = {
    FirstName: "Rishika",
    age: 19
}

function login(userData: User): User {
    return userData;
}


console.log(login({ FirstName: "John", age: 20 }));


//INTERFACES

interface Transaction {
    payerAccountNumber: number;
    payeeAccountNumber: number;
}

interface BankAccount {
    accountNumber: number;
    accountHolder: string;
    balance: number;
    isActive: boolean;
    transactions: Transaction[];
}

const transaction1: Transaction = {
    payeeAccountNumber: 123,
    payerAccountNumber: 456
}

const bankAccount: BankAccount = {
    accountNumber: 123,
    accountHolder: "John Doe",
    balance: 4000,
    isActive: true,
    transactions: [transaction1]
}


//EXTENDING INTERFACE

interface Book {
    name: string;
    price: number
}

interface EBook extends Book {
    fileSize: number,
    format: string
}

interface AudioBook extends EBook {
    duration: number
}


const book: AudioBook = {
    name: "Atomic habits",
    price: 1200,
    fileSize: 1000,
    format: 'pdf',
    duration: 5
}

//GENERICS

function logString(arg: string) {
    console.log(arg);
    return arg;
}

logString("logged in");

// function logAnything(arg: any) {
//     console.log(arg);
//     return arg;
// }


function logAnything<T>(arg: T): T {
    console.log(arg);
    return arg;
}

interface HasAge {
    age: number;
}

function getOldest<T extends HasAge>(people: T[]): T {
    return people.sort((a, b) => b.age - a.age)[0];
}

const people = [{ age: 30 }, { Age: 40 }, { age: 10 }];

//IMPORTANT EXAMPLE

interface IPost {
    title: string;
    id: number;
    description: string
}


const fetchPostData = async (path: string): Promise<IPost[]> => {
    const response = await fetch(`http://example.com${path}`);

    return response.json();

}

(async () => {
    const posts = await fetchPostData("/posts");
})();

//DUCK TYPING

interface ICredential {
    username: string,
    password: string,
    isAdmin?: boolean
}

function loginn(credentials: ICredential): boolean {
    console.log(credentials)
    return true;
}

const userinfo = {
    username: "horn pub",
    password: "Secret",
    isAdmin: true
}

loginn(userinfo);



//TYPESCRIPT CONFIGURATION

