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

  calculate = () => {
      let results = this.state.display;
       if(results.includes("÷")){
        let final = results.replace("÷","/")
        
       try {
        this.setState({
          display: eval(final)
        })

    } catch (e) {
        this.setState({
            display: "invalid input"
        })

    }
 }
    

    else if(results.includes("%")){
      let final = results.replace("%","/100")
      
      try {
        this.setState({
          display: eval(final)
        })

    } catch (e) {
        this.setState({
            display: "invalid input"
        })

    }
 }
    

    else  if (results.includes('--')){
      results = results.replace('--','+')

      try {
        this.setState({
          display: eval(results)
        })

    } catch (e) {
        this.setState({
            display: "invalid input"
        })

    }
 
  }

    else{

      try {
        this.setState({
          display: eval(results)
        })


    } catch (e) {
        this.setState({
            display: "invalid input"
        })

    }
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
      let display = this.state.display;
      let fin = display.toString()
      let finalDisplay = fin.slice(0, -1)
      this.setState(
            {
              display: finalDisplay
              
            })
      
    }

  
    else if(h2 === "="){
      this.calculate();
    }
   

    else{
    this.setState({
      display : this.state.display + h2
    })
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
