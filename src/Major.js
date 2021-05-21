import React from 'react';

class Major extends React.Component{
   constructor(props){
       super(props)
    
}

    handleOnClick = (event) => {
        let val = event.target.innerHTML;
        this.props.getInputVal(val);
    }
    

   render(){
        return(
            <div class="row text-center">

                <div class="col-md-3 lightgraycols">
                    <h2   getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                        Reset
                    </h2>
                </div>
               
                <div class="col-md-3 lightgraycols">
                    <h2  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}> 
                        Back
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        % 
                    </h2>
                </div>

                <div class="col-md-3 orangecols">
                    <h2  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}> 
                        ÷ 
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2   getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        7
                    </h2>
                </div>
               
                <div class="col-md-3 lightgraycols">
                    <h2  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        8
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        9
                    </h2>
                </div>

                <div class="col-md-3 orangecols">
                    <h2 getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        *
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2   getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        4
                    </h2>
                </div>
               
                <div class="col-md-3 lightgraycols">
                    <h2  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        5
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2 getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        6
                    </h2>
                </div>

                <div class="col-md-3 orangecols">
                    <h2 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        -
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2  onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        1
                    </h2>
                </div>
               
                <div class="col-md-3 lightgraycols">
                    <h2 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        2
                    </h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        3
                    </h2>
                </div>

                <div class="col-md-3 orangecols">
                    <h2 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        +
                    </h2>
                </div>
            </div>
        )
    }
};

export default Major;