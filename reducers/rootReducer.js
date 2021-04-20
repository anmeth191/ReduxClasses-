//declare our initial state
/*
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
*/


const initialState = {
    users:[
    {id:1 , name:'Angel' , job:'Inventory',city:'Boaco'},
    {id:2 , name:'Tina' , job:'Human Resources',city:'Fleetwood'},
    {id:3 , name:'Elyin' , job:'Beekeper',city:'Boaco'},
    {id:4 , name:'John' , job:'Electrician',city:'Fleetwood'},
    {id:5 , name:'Tammy' , job:'Manager',city:'Fleetwood'},
    {id:6 , name:'Eloisa' , job:'Veterinaria',city:'Boaco'},
    {id:7 , name:'Radley' , job:'Student',city:'Fleetwood'},
    {id:8 , name:'Pippa' , job:'Student',city:'Fleetwood'},
    {id:9 , name:'Loki' , job:'Doggy',city:'Fleetwood'},
    {id:10 , name:'Colby' , job:'Cat',city:'Fleetwood'}]
    
}

const  rootReducer = (state = initialState , action) => {
     if(action.type === 'DELETE_USER'){
         console.log('you want to delete this user')

     }
     return state
}

export  default rootReducer;