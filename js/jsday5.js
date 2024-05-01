//  FUNCTIONS
function calc() {
  let a = 2;
  let b = 3;
  console.log(`Answer: ${a + b}`);
}

calc();

function areaOfTriangle(base, height) {
  // 1/2 * b* h
  let area, b, h;
  b = base;
  h = height;

  area = (1 / 2) * b * h;

  console.log(`Area = ${area}`);
}

areaOfTriangle(5, 6);

// ARROW FUNCTIONS
const greet = (name) => {
  console.log(`Good Morning ${name}`);
};

greet("Samuel");
greet("David");

// OBJECTS

const business = {
  name: "Sadiq & Sons",
  address: "65 Road Street",
  staff: 4,
  salary: 1000,
  amountPerItem: 20,
  totalItemsSold: 15,
  totalSalary: function () {
    const sal = this.staff * this.salary;
    return sal;
  },
};

console.log(business);
console.log(business.staff);
console.log( business.totalSalary() );


let user1 = {
    acct: '1111',
    bal: 60000
}
let user2 = {
    acct: '2222',
    bal: 100
}

let amount = 10000;
let receiver = "2222";


if (user1.bal <= amount) {
    console.log("Insufficient Balance");
}
else if(receiver != user2.acct) {
    console.log('Invalid Receiver Account');
}
else{
    console.log("Transfer Successful");
}


/*
    Create a shops application
    1. User should be able to enter a product name
    2. Create a function that will take that product and return the price of the product

    3. Ten different products
    4. when the product does not exist, it should tell the use zthat the product does not exist
*/ 
