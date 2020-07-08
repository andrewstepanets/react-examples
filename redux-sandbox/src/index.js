import { createStore } from 'redux';


const reducer = (state = 0, action) => {

  switch(action.type) {
    case 'INC':
      return state + 1;
    default:
      return state;
  }
};

const store = createStore(reducer);
// initial State our app
console.log(store.getState());

// get information aboute updating store
store.subscribe(() => {
  console.log(store.getState());
});


// increment + 1

store.dispatch({type: 'INC'});
store.dispatch({type: 'INC'});

