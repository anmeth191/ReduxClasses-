import React from 'react';
import { connect } from 'react-redux';


class DisplayContent extends React.Component{
   state = {
       users:[]
   }

  componentDidMount() {

       this.props.userContent.filter( element =>{
           return this.setState({users: element.name === this.props.match.params.user} , ()=>{return this.state.users})
       })

  }

    render(){
        console.log(this.props.userContent)
        console.log(this.state.users)
    return(
        <div>{}</div>
    )//end of the return=
}//end of the render
}//end of the class

const mapStateToProps = (state , ownProps)=>{
    const user  = ownProps.match.params.user; 
    return { userContent: state }//end of the return 

}
export default connect(mapStateToProps)(DisplayContent);