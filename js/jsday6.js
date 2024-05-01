// SWITCH STATEMENT

// let product = prompt('Enter Product');


// if (product == 'oppo') {
//     alert('Oppo is #2000')
// }
// else if(product == 'samsung')
// {
//     alert('Samsung is #3000')
// }
// else if(product == 'iphone 11')
// {
//     alert('iphone 11 is #3000')
// }
// else if(product == 'iphone 12')
// {
//     alert('iphone 12 is #3000')
// }
// else{
//     alert('Product not found');
// }

// switch (product) {
//   case "oppo":
//     alert("#500");
//     break;
//   case "samsung":
//     alert("#900");
//     break;
//   default:
//     alert("Product not Found");
// }



// LOOPS

/*
    1. for - iteration number, condition, increment
    2. while - condition
    3. forEach - ARRAYS (callback function)
*/ 


// // FOR LOOP
// for (let i = 0; i < 10; i++) {
//     console.log('Good Afternoon ' + i);
// }


// // WHILE LOOP
// let num = 1;

// while (num < 10)
// {
//     console.log("Good Day" + num++);
// }

// FOR EACH

// const students = ['john', 'jude', 'jack', 'jeremy'];

// students.forEach((value,index)=>{
//     console.log(`${value} ${index} - Come to class early`);
// });

// A system where users below the age of 10 learn HTML, below the age of 20 jS,above learns React

const allUsers = [
    {
        name: "John Doe",
        email: "johndoe@gmail.com",
        age: 20
    },
    {
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        age: 9
    },
    {
        name: "Sam Smith",
        email: "sam@gmail.com",
        age: 49
    },
    {
        name: "Julius Malema",
        email: "julius@gmail.com",
        age: 49
    },
];

allUsers.forEach((user)=> {
    let string = "";
    if (user.age < 10) {
         string = `Name: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}\nClass: HTML`;
    }
    else if(user.age <= 20) {
         string = `Name: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}\nClass: javaScript`;
    }
    else {
         string = `Name: ${user.name}\nEmail: ${user.email}\nAge: ${user.age}\nClass: React`;
    }
})

// Build an age calculator that after calculating the age check and returns what age bracket the user falls into