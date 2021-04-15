//declare our initial state

const initialState = {
  
    information:[
        {id:1 , name:'Angel' , job:'Inventory Control'},
        {id:2, name:'Elyin' , job:'Beekeeper'},
        {id:3, name:'Eloisa' , job:'Veterian'}
                 ]

}

const rootReducer = (state = initialState , action)=>{
return state;
}

export default rootReducer;