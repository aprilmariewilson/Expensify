import moment from 'moment';
import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sort by amount ', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});
test('should generate sort by date ', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});
test('should generate set text filter ', () => {
    const textData = {
        text: 'This is text'
    };
    const action = setTextFilter(textData);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: {
            ...textData
        }
    });
});

test('should generate set text filter ', () => {
  
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

// // SET_TEXT_FILTER
// export const setTextFilter = (text = '') => ({
//     type: 'SET_TEXT_FILTER',
//     text
// });
// // SORT_BY_DATE
// export const sortByDate = () => ({
//     type: 'SORT_BY_DATE'
// });
// // SORT_BY_AMOUNT
// export const sortByAmount = () => ({
//     type: 'SORT_BY_AMOUNT'
// });
// // SET-START_DATE 
// export const setStartDate = (startDate) => ({
//     type: 'SET_START_DATE',
//     startDate
// });
// // SET_END_DATE 
// export const setEndDate = (endDate) => ({
//     type: 'SET_END_DATE',
//     endDate
// });
