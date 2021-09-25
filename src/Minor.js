import React from 'react'

class Minor extends React.Component{
 
    render(){
        return(
            <div class="row text-center">
                        <div class="col-md-6 col-sm-6 col-xs-6 lightgraycols">
                            <h3 getInputVal = {this.props.getInputVal}  onClick = {this.props.getInputVal}>
                                0
                            </h3>
                        </div>

                        <div class="col-md-3 col-sm-3 col-xs-3 lightgraycols">
                            <h3 getInputVal = {this.props.getInputVal}  onClick = {this.props.getInputVal}>
                                .
                            </h3>
                        </div>

                        <div class="col-md-3 col-sm-3 col-xs-3 orangecols">
                            <h3 getInputVal = {this.props.getInputVal}  onClick = {this.props.getInputVal}>
                                =
                            </h3>
                        </div>
                    </div>
        )
    }
}

export default Minor;