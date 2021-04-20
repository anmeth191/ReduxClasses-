/*import React from 'react';
import { connect } from 'react-redux';


class DisplayContent extends React.Component{
   state = {
       users:[]
   }

   onClickEvent = ()=>{
       const { id } = this.props.userContent;
       this.props.history.push('/')
       this.props.deleteUser(id);
      
   }

    render(){
const { id , name, job, city} = this.props.userContent;
return(
        <div key={id}>{<h1>Name: {name}</h1>}
         { <h4>Job: {job}</h4>}
         { <h4>City: {city}</h4>}
         { <button onClick={this.onClickEvent}>Delete User</button> }
         </div>
    )//end of the return=
}//end of the render
}//end of the class

const mapStateToProps = (state , ownProps)=>{
    const user  = ownProps.match.params.user; 
    return { userContent: state.find( element => {
        return element.id === parseInt(user);
    })}//end of the return 
}

const disptachToProps = (disptach)=>{
   return {
      deleteUser: (userId)=>{ disptach({type:'DELETE_USER' , id:userId})}
   }
}


export default connect(mapStateToProps , disptachToProps)(DisplayContent);*/

import React from 'react';
import { connect } from 'react-redux';
class DisplayContent extends React.Component{

onClickEvent = ()=>{
const { id } = this.props.usersRender;    
this.props.deleteUser(id);

}    
render(){

    const { id , name , job , city} = this.props.usersRender

return(
<div>{ <div key={id}>
       <h1>{name}</h1>
       <h4>{job}</h4>
       <h4>{city}</h4>
       <button onClick={this.onClickEvent}>Delete User</button>
     </div> }</div>
)//end of the return
}//end of the render
}//end of the displaycontent class

const setPropsToMap = (state , ownProps)=>{
 const { id } = ownProps.match.params;
    return{
      usersRender: state.users.find( user => { return user.id === parseInt(id)}) , idUser:id
    }
}

const dispatchProps = (dispatch)=>{

return{
  deleteUser: (idUser)=> { dispatch({type:'DELETE_USER' , id: idUser})}
}
}

export default connect(setPropsToMap , dispatchProps)(DisplayContent);