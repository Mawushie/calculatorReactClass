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

    for(var i = 0; i < results.length ; i++){
        if(results[i] != 0){
           
          break;
           
        }
    }
        var newResults = results.slice(i ,results.length) 
        console.log(newResults)
    
    
       if(newResults.includes("÷")){
        let final = newResults.replace("÷","/")
        
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
    

    else if(newResults.includes("%")){
      let final = newResults.replace("%","/100")
      
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
    

    else  if (newResults.includes('--')){
      newResults = newResults.replace('--','+')

      try {
        this.setState({
          display: eval(newResults)
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
          display: eval(newResults)
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
