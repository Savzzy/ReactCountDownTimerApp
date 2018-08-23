import React, {Component} from 'react';
import './App.css';
class App extends Component {
  constructor(props){
  super(props);
  this.state = {deadline:"November 25 2018"}
  }
  changeDeadline(){
    this.setState({ deadline: "April 25 2018" });
  }
  
  render(){
    return (
    <div className="App">
      <div>Countdown to {this.state.deadline}</div >
    <div className="App-title"> 
        <div className="Clock-days" >14 days</div>  
        <div className="Clock-hours">30 hours</div>
        <div className="Clock-minutes">25 minutes</div>
        <div className="Clock-seconds">20 seconds</div>
    </div>
    <div>
      <input placeholder="new date"/>
      <button onClick={()=>{this.changeDeadline()}}>Submit</button>
    </div>
    </div>
  )
    
  }
}
export default App;