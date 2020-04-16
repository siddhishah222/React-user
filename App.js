import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state={
    usernme:'Sid'
  }
  nameChangedHandler=(event)=>
  {
    this.setState(
      
      {usernme:event.target.value}
    
    )
  }
  render()
  {
   return (
    <div className="App">
      <UserInput 
      changed= {this.nameChangedHandler}
      currentname={this.state.usernme}
       />
      <UserOutput username={this.state.usernme}/>
      <UserOutput username={this.state.usernme}/>
      <UserOutput username="Siddhi"/>
    </div>
   );
  }
}

export default App;


