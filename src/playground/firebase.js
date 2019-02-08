import * as firebase from 'firebase';


const config = {
    apiKey: "AIzaSyDqsOPZeaCOEDbIjy3MpJjJWFO0ljfOFzA",
    authDomain: "expensify-524e4.firebaseapp.com",
    databaseURL: "https://expensify-524e4.firebaseio.com",
    projectId: "expensify-524e4",
    storageBucket: "expensify-524e4.appspot.com",
    messagingSenderId: "123819166805"
};

firebase.initializeApp(config);
const database = firebase.database();

database.ref('expenses').on('child_removed',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_added',(snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses')
// .on('value',(snapshot) => {
//     const expenses = [];
//     snapshot.forEach((ChildSnapshot) => {
//         expenses.push({
//             id: ChildSnapshot.key,
//             ...ChildSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     note: 'march 2019',
//     amunt: 500.00,
//     createdAt: 84684569489
// });
// database.ref('expenses').push({
//     description: 'car payment',
//     note: 'march 2019',
//     amunt: 250.00,
//     createdAt: 78946526
// })
// database.ref('expenses').push({
//     description: 'clothes',
//     note: 'new work wardrobe',
//     amunt: 378.26,
//     createdAt: 965468789456
// });






// database.ref('notes').push({
//     title: 'course topics',
//     body: 'React Native, Angular, Python'
// });

// database.ref('notes/-LY9u44BRwEQUnzTMJ1h').update({
//     body: 'React Native, Angular, Python, C++, C#'
// });
// const firebaseNotes = {
//     notes:{
//         guhkl: {
//             title: 'first note',
//             body: 'this is my first note'
//         },
//         yiguij: {
//             title: 'another note',
//             body: 'oh my gosh all the notes'
//         }
//     }
// };




//get initial value and at any change
// database.ref().on('value',(snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
// })
// setTimeout(() => {
// database.ref('age').set(33)
// }, 3500);

// setTimeout(() => {
//     database.ref('age').off
//     }, 7000);

//     setTimeout(() => {
//         database.ref('age').set(30)
//         }, 10500);
//get info rendered once at a certain point of time 
// database.ref().set({
//     name: 'April Wilson',
//     age: 32,
//     stressLevel: 6,
//     location: {
//         city: 'Salt Lake',
//         state: 'Utah',
//         Country: 'United States'
//     },
//     job: {
//         title: 'software developer',
//         company: "Google"
//     }
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
//     'location/state':'Washington'
// });

// database.ref('single').remove();