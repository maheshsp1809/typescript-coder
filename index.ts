// Queation 1
interface Product{
    name: string;
    price: number;
    description:string;

}

const obj: Product ={
    name:"Mahesh",
    price:45,
    description:"Mahesh is a good boy"
};

console.log(obj);

// Question 2
type Point={
    x:number;
    y:number;

};

function euclid(point1:Point,point2:Point){
    const dx=point1.x-point2.x;
    const dy=point1.y-point2.y;
    return Math.sqrt(dx*dx + dy*dy);
}
const pointA:Point = {x:1, y:2};
const pointB:Point = {x:4, y:6};
const distance=euclid(pointA,pointA);
console.log(`Euclid distance: ${distance}`);
// Qustion 3
interface Person{
    name:string;
    age:number;
    email?:string;
}
const array:Person[]=[
    {name: "John", age:12, email:"mahesh@gmail.com"},
    {name: "Bob",age:28},
    {name:"Charlie", age:22},
    {name:"Afroz", age:25, email:"afroz@gmail.com"}
];

const peopleWithoutEmail=array.filter(person =>person.email!==undefined);
console.log(peopleWithoutEmail);

// Question 4
type Employee={
    id: string,
    name:string,
    role:string,
}

const arr:Employee[]=[{id:"Id1",name:"Mahesh",role:"president"},{
    id:"Id2",name:"afroz",role:"vice president"},
    {id:"Id3",name:"Alum",role:"former president"},
]

function getEmployByRole(employees:Employee[],targetRole:string){
   const filteredEmployees = employees.filter(employee => employee.role===targetRole);
   return filteredEmployees.map(employee =>employee.name);
}

const targetRole="president";
const managerNames=getEmployByRole(arr,targetRole);
console.log(managerNames);

//Question 5
function addNumbers(a: number, b: number): number {
    return a + b;
}

const result = addNumbers(5, 3);
console.log(result); // Output: 8

//Question 6
function factorial(n: number): number {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

const fact = factorial(5);
console.log(fact); // Output: 120
