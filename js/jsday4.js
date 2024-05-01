// ARRAYS

let user = [12, 13, 'John Doe', true, null];
user = ['user@gmail.com', 'pass222444', 12];

console.log(user);

let students = ['Michael', "Scofield", "Jeremy", "Daniel"];

console.log(students);

students[1] = "David";


console.log(students[2]);

console.log(students);

console.log(students.length); 

const slicedArray = students.slice(2,4);

console.log(slicedArray);

students.push('Samuel');
students.push('Sarah');
students.push('Sophia');

console.log(students);

students.pop();

console.log(students);

console.log(students.indexOf('Sarah'));

console.log(students.includes('Samuel'));

let studentsString = students.join('-/-');

console.log(studentsString);

let newStudentArray = studentsString.split('-/-');

let words = "Hello I am john and I would like to tell you a story about my first day at school";

let wordsArray = words.split(' ');

console.log(words);
console.log(wordsArray);

console.log(wordsArray.length);

// OBJECTS

const car = {
    name: "mercedes",
    color: "red",
    year: 2001
};

const house = {
    foundation: true,
    bathrooms: 4,
    storeFront: 1,
    parkingSpace: true,
    type: "Duplex"
}


console.log(car);

console.log(car.name);
console.log(house.bathrooms);