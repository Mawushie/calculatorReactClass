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

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3   getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                        Reset
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}> 
                        Back
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        % 
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}> 
                        ÷ 
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3   getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        7
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        8
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        9
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        *
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3   getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        4
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        5
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 getInputVal = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        6
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        -
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        1
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        2
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        3
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 onClick = {this.props.getInputVal} onClick = {this.handleOnClick}>
                        +
                    </h3>
                </div>
            </div>
        )
    }
};

export default Major;