//object destructuring


// const person = {
//     name: 'april',
//     age: 32,
//     location: {
//         city: 'Salt Lake City',
//         temp: 40
//     }
// };
// const { name: firstName = 'Anonymous', age} = person;
// const {city, temp: temperature} = person.location;
// console.log(`${firstName} is ${age}.`);
// if (city && temperature){
// console.log(`It's ${temperature} in ${city}.`);
// };
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'self-published' } = book.publisher;

// console.log(publisherName);

// //Array destructuring

// const address = ['56 s 200 w', 'bountiful', 'Utah', '84010'];
// //lines it up by array placement not name.... you can leave a black space for anything needed
// // const [ , city, state] = address;
// const [street, city, state = 'New York', zip] = address;


// console.log(`You are in ${city} ${state}.`);

// const menu = [ 'coffee (hot)', '$2.00', '$2.50', '$3.00'];
// const [item, ,med] = menu;

// console.log( `a medium ${item} costs ${med}` );