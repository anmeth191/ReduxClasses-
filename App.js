//in this component we will just call the dispkay user component that basically will call the information from the
//store with the reducer
/*
import React from 'react';
import DisplayUser from './displayUser';
class AppComponent extends React.Component {
render(){
return(
    <div>
      <DisplayUser />
    </div>
)
}
}

export default AppComponent;
*/
/*
import React from 'react';
import DisplayUser from './displayUser';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import DisplayContent from './DisplayContent';
class AppComponent extends React.Component{

render(){

return(
  <Router>
  <div>
    <Switch>
      <Route exact path='/' component={DisplayUser} />
     <Route path='/:user' component={DisplayContent} />
    </Switch>
    </div>
  </Router>
)//end of the return
}//end of the render
}

export default AppComponent;*/


import React from 'react';
import { BrowserRouter as Router , Switch , Route } from 'react-router-dom';
import DisplayContent from './DisplayContent';
import DisplayUser from './displayUser';

class AppComponent extends React.Component{


render(){

return(
<Router>
<div>
  <Switch>
    <Route exact path='/' component={DisplayUser}/>
    <Route path='/:id' component={DisplayContent}/>
    </Switch>
</div>
</Router>
)//end of the return
}//end of the render
}//end of the app component class
 export default AppComponent;