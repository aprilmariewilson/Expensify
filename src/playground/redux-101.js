import { createStore } from 'redux';

// Action generators = functions that return action objects
// const add = ({ a, b }, c) => {
//     return a + b + c;
// }

// console.log(add({ a:1, b:12}, 1000));

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrimentCount = ({decrimentBy = 1} = {}) => ({
    type: 'DECRIMENT',
    decrimentBy

});
const setCount = ({count }) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
})

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            };
            case 'DECRIMENT':
            return{
                count: state.count - action.decrimentBy
            };
            case 'SET':return{
                count: action.count
            };
            case 'RESET':
            return{
                count: 0
            };
            default:
            return state;
    }
     };


const store = createStore(countReducer)

store.subscribe(()=> {

console.log(store.getState());
});
//actions - than an object that gets sent to the store
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
store.dispatch(incrementCount({ incrementBy: 5 }))


store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrimentCount());

store.dispatch(decrimentCount({decrimentBy: 10}));

store.dispatch(setCount({count: 101}));
//i'd like to increment the count

//i'd like to decriment the coint

