import React from 'react'

class Minor extends React.Component{
   
    handleOnClick = (event) => {
        let val = event.target.innerHTML;
        this.props.getInputVal(val);
    }
    
    render(){
        return(
            <div class="row text-center">
                        <div class="col-md-6 col-sm-6 col-xs-6 lightgraycols">
                            <h3 getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                                0
                            </h3>
                        </div>

                        <div class="col-md-3 col-sm-3 col-xs-3 lightgraycols">
                            <h3 getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                                .
                            </h3>
                        </div>

                        <div class="col-md-3 col-sm-3 col-xs-3 orangecols">
                            <h3 getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                                =
                            </h3>
                        </div>
                    </div>
        )
    }
}

export default Minor;