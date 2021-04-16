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


import React from 'react'
import { connect } from 'react-redux';
import { Link , Route }  from 'react-router-dom';
import DisplayContent from './DisplayContent';


class DisplayUser extends React.Component{
    
    state = {
        informationUser:[]
    }
componentDidMount = ()=>{

    this.setState({informationUser:this.props.information} , ()=>{
      return this.state.informationUser;
    });

}

    render(){
return(
<div>{this.state.informationUser.map( user =>{

return(
    <div key={user.id}>
        <h1><Link to={`/user/${user.id}`}>{user.name}</Link></h1>
        <h4>{user.country}</h4>
        </div>
)//end of the return for the map
}//end of the map function
)//end the first return
/*end of the first div*/}
<Route exact path="/user/:id" component = {DisplayContent} /> 
</div>
)
}
}

const setPropsToMap = (state)=>{

    return{
        information:state.information
    }
}

export default connect(setPropsToMap)(DisplayUser);