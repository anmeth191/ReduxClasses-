/*import React from 'react';
import { connect } from 'react-redux';

const DisplayUser = (props)=>{
return(
<div>DisplayUser {console.log(props.cards)}</div>
)
}


const showPropsToState = (state)=>{
return{cards:state.cards}
}

export default connect(showPropsToState)(DisplayUser);*/
/*
import React from 'react';
import { connect } from 'react-redux'; //import connect to reach at the reducer and pull back the data


class DisplayUser extends React.Component{
        state = {
            informationUser:[]
        }        

      componentDidMount = ()=> {
        this.setState({informationUser:this.props.information} , ()=>{
            return this.state.informationUser;
        })
      }  
    render(){
        return(
            <div>{this.state.informationUser.map( user =>{

                return(
                   <div key={user.id}>
                       <h1>{user.name}</h1>
                       <h3>{user.job}</h3>
                   </div>
                )
            })}</div>
        )
    }
}
//create a function that will return a new object coming from the reducer and send it to the connect
const showItemsStore = (state)=>{ return {information:state.information}}
//export the display user with the connect method sending the information that was fetched from the reducer
//this information will go at the same component as a props so you must destructured and the map the elements
export default connect(showItemsStore)(DisplayUser);*/


import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class DisplayUser extends React.Component {
      state ={information: []}

componentDidMount(){

this.setState({information:this.props.information} , ()=>{
    return this.state.information;
})
}
render(){
    return(
        <div>{this.state.information.map( user =>{
           return(
               <div key={user.id}>
                  <Link to={`/${user.name}`} > <h1>{user.name}</h1> </Link>
               </div>
           ) 
        })} </div>
    ) 
    //end of the return 
}//end of the render
}//end of the class component
const setPropsToMap = (state)=>{
return {information:state}//end of the return
}//end of the function setPropsToMap
export default connect(setPropsToMap)(DisplayUser);