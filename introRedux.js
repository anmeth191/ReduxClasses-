//this is my first time using Redux and this is what i undertand so far

const { createStore } = Redux; //first destructure createStore from redux

const startState = {  //<-- that is the initial state in this case an object of arrays that goes as parameter in the function reducer 
  todos:[], 
  posts:[]
}

function reducer(state = startState , action){ // function reducer comunicates with the storage and updates elements
  
  if(action.type === 'ADD_TODO'){ 
    return{ ...state, // end ... pr spread operator returns all the elements in the object initial state  if not only returns
           //the object that is specifiying , in this case array todos but with the spread operator all the elements are returned
      todos:[...state.todos, action.message]
    }
  }

}


const store = createStore(reducer); // create the store that is equal as createStore that is a function and receives reducer as parameter

const initialAction = { // this is the element we want to dispatch in the store
  type:'ADD_TODO' ,
  message:'Learn Redux'
}

const initialAction2 = {
  type:'ADD_TODO' ,
  message:'Learn CSS'
}
store.dispatch(initialAction) // we send the element to dispatch and reducer will update ii in the state

store.subscribe(()=>{ // subscribe will look for any changes in the reducer 
  console.log('state has been updtated');
  console.log(store.getState());//getState returns the state updated 
  
})
store.dispatch(initialAction2) // dispatch another element in the reducer to try the subscribe

