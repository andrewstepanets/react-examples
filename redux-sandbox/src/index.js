import React from 'react';
import ReactDom from 'react-dom';
import { createStore, bindActionCreators } from 'redux';
import reducer from './reducer';
import * as actions from './actions';

import Counter from './counter';

const store = createStore(reducer);
const { dispatch } = store;

// our example of Redux bindCreators func
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// works built-in bindActionCreators in Redux
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

const update = () => {
  // old Redux code
  // document
  //   .getElementById('counter')
  //   .innerHTML = store.getState();
  // new code with React
  ReactDom.render(
    <Counter
      counter={store.getState()}
      inc={inc}
      dec={dec}
      rnd={() => {
        const value = Math.floor(Math.random() * 10);
        rnd(value);
      }} />,
    document.getElementById('root'));
};

update();

store.subscribe(update);