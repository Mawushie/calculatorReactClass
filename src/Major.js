import React from 'react';

class Major extends React.Component{

   render(){
        return(
            <div class="row text-center">

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  onClick = {this.props.getInputVal}>
                        Reset
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  onClick = {this.props.getInputVal}> 
                        Back
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3   onClick = {this.props.getInputVal}>
                        % 
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 onClick = {this.props.getInputVal}> 
                        ÷ 
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  onClick = {this.props.getInputVal}>
                        7
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal}>
                        8
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal}>
                        9
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 onClick = {this.props.getInputVal}>
                        *
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal}>
                        4
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  onClick = {this.props.getInputVal}>
                        5
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal}>
                        6
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 onClick = {this.props.getInputVal} >
                        -
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3  onClick = {this.props.getInputVal}>
                        1
                    </h3>
                </div>
               
                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal} >
                        2
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 lightgraycols">
                    <h3 onClick = {this.props.getInputVal}>
                        3
                    </h3>
                </div>

                <div class="col-xs-3 col-sm-3 col-md-3 orangecols">
                    <h3 onClick = {this.props.getInputVal}>
                        +
                    </h3>
                </div>
            </div>
        )
    }
};

export default Major;