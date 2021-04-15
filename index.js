import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux'; //provider provides the store coming from the component
//import rootReducer from './reducers/rootReducer';
//import AppComponent from './App';

//const store = createStore(rootReducer);//create our store and pass our reducer in this case root reducer to transform the data
//past in the provider the information to render as props and wrapping the component we want to ge the data from
//ReactDOM.render(<Provider store={store}><AppComponent /> </Provider>,document.querySelector('#root'))

import { createStore } from 'redux'; //create our store 
import { Provider } from 'react-redux'; // create our provider that links the store and pass it as promps
import AppComponent from './App';
import rootReducer from './reducers/rootReducer';


const store = createStore(rootReducer); //create our variable store and assign createStore passin the reducer as params

//provide the store to the app component
ReactDOM.render(<Provider store={store}> <AppComponent /> </Provider> , document.querySelector('#root'));