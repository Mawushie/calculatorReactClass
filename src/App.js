import './App.css';
import Display from './Display';
import Major from './Major';
import Minor from './Minor';
import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      display: "" ,
      afterCalc : false
    }
  }

  checkinput = () => {
    let result = this.state.display.toString();
    console.log(result.includes("*"))
    if(result.includes("*") ){
      console.log("called")
      this.setState({
        display : this.state.display
      })
      
    }
    else{
      console.log("not working")
    }
  }

  calculate = () => {
   
    this.checkinput()
    var results = this.state.display
    for(var i = 0; i < results.length ; i++){
        if(results[i] !== 0){
          break;
           
        }
   
      }
      var newResults = results.slice(i ,results.length) 
        
     if(newResults.includes("÷")){
        let final = newResults.replace("÷","/")
        
          try {
            this.setState({
              display: eval(final) ,
              afterCalc : true
            })

        } catch (e) {
            this.setState({
                display: "invalid input",
                afterCalc : true
            })

        }
      }
    
    else if(newResults.includes("%")){
      let final = newResults.replace("%","/100")
      
        try {
          this.setState({
            display: eval(final),
            afterCalc : true
          })

      } catch (e) {
          this.setState({
              display: "invalid input",
              afterCalc : true
          })
      }
    }
    

    else  if (newResults.includes('--')){
      newResults = newResults.replace('--','+')

        try {
          this.setState({
            display: eval(newResults),
            afterCalc : true
          })

      } catch (e) {
          this.setState({
              display: "invalid input",
              afterCalc : true
          })
     }
    }

    else{
        try {
          console.log("calledagain")
          this.setState({
            display: eval(newResults),
            afterCalc : true
          })
      } catch (e) {
          this.setState({
              display: "invalid input",
              afterCalc : true
          })
      }
    }  
}

  getInputVal = (h2) => {
    const input = h2.target.innerHTML;
 
    if(input === "Reset"){
      this.setState(
       {
         display : " "
       }
      )
    }
    else if(input === "Back"){
      let display = this.state.display;
      let fin = display.toString()
      let finalDisplay = fin.slice(0, -1)
      this.setState(
            {
              display: finalDisplay
              
            })
    }

    else if(input === "="){
      this.calculate();
    }

    else if(this.state.afterCalc){
      this.setState({
        display : input,
        afterCalc : false
      })
    }

    else{
    this.setState({
      display : this.state.display.concat(input)
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
