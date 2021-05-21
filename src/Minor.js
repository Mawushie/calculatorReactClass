import React from 'react'

class Minor extends React.Component{
   
    handleOnClick = (event) => {
        let val = event.target.innerHTML;
        this.props.getInputVal(val);
    }
    
    render(){
        return(
            <div class="row text-center">
                        <div class="col-md-6 lightgraycols">
                            <h2 getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                                0
                            </h2>
                        </div>

                        <div class="col-md-3 lightgraycols">
                            <h2 getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                                .
                            </h2>
                        </div>

                        <div class="col-md-3 orangecols">
                            <h2 getInputVal = {this.props.getInputVal}  onClick = {this.handleOnClick}>
                                =
                            </h2>
                        </div>
                    </div>
        )
    }
}

export default Minor;