import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
import App from './components/app';

const store = createStore(reducer);

// our example of Redux bindCreators func
// const bindActionCreator = (creator, dispatch) => (...args) => {
//   dispatch(creator(...args));
// };

// works built-in bindActionCreators in Redux
// const { inc, dec, rnd } = bindActionCreators(actions, dispatch);

ReactDom.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.getElementById('root'));
