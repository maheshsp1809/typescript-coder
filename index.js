"use strict";
var obj = {
    name: "Mahesh",
    price: 45,
    description: "Mahesh is a good boy"
};
console.log(obj);
function euclid(point1, point2) {
    var dx = point1.x - point2.x;
    var dy = point1.y - point2.y;
    return Math.sqrt(dx * dx + dy * dy);
}
var pointA = { x: 1, y: 2 };
var pointB = { x: 4, y: 6 };
var distance = euclid(pointA, pointA);
console.log("Euclid distance: ".concat(distance));
var array = [
    { name: "John", age: 12, email: "mahesh@gmail.com" },
    { name: "Bob", age: 28 },
    { name: "Charlie", age: 22 },
    { name: "Afroz", age: 25, email: "afroz@gmail.com" }
];
var peopleWithoutEmail = array.filter(function (person) { return person.email !== undefined; });
console.log(peopleWithoutEmail);
var arr = [{ id: "Id1", name: "Mahesh", role: "president" }, {
        id: "Id2", name: "afroz", role: "vice president"
    },
    { id: "Id3", name: "Alum", role: "former president" },
];
function getEmployByRole(employees, targetRole) {
    var filteredEmployees = employees.filter(function (employee) { return employee.role === targetRole; });
    return filteredEmployees.map(function (employee) { return employee.name; });
}
var targetRole = "president";
var managerNames = getEmployByRole(arr, targetRole);
console.log(managerNames);
