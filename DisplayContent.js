import React from 'react';
import { connect } from 'react-redux';

class DisplayContent extends React.Component{

    state = {

        user:[]
    }

    componentDidMount = ()=>{

        this.setState({user:this.props.information} , ()=>{
            return this.state.user
        })
       
    }

render(){
    
    return(<div>{
         this.state.user.map (nuser =>{
                return(
                    <div id={nuser.id}>
                        <h1>{nuser.name}</h1>
                    </div>
                )
            
         })
        }</div>)
}
}

const setMapValue = (state) =>{

    return{
           information: state.information.id === 1
    }
}
export default connect(setMapValue)(DisplayContent);