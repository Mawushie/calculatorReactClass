import logo from './logo.svg';
import './App.css';
import Display from './Display';
import Major from './Major';
import Minor from './Minor';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      display: ""
    }
  }

  getInputVal = (h2) => {
    if(h2 === "Reset"){
      this.setState(
       {
         display : " "
       }
      )
    }
    else if(h2 === "Back"){
      this.setState(
        {
          display: this.state.display.slice(0, -1)
        }
      )
    }

    else{
    this.setState({
      display : this.state.display + h2
    });
   
  }
}
  
  render(){
    return (
       <div class="container">
          <div class="col-md-8 col-md-offset-2">
            <Display display = {this.state.display} />
            <Major  getInputVal = {this.getInputVal}  />
            <Minor getInputVal = {this.getInputVal}  />
        
          </div>
        </div>
    );
  }
  
}

export default App;
