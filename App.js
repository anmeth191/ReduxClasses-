//in this component we will just call the dispkay user component that basically will call the information from the
//store with the reducer

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
