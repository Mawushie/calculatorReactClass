import React from 'react';

class Major extends React.Component{
   constructor(props){
       super(props)
   }
   render(){
        return(
            <div class="row text-center">

                <div class="col-md-3 lightgraycols">
                    <h2>{this.props.value1}</h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2>{this.props.value2}</h2>
                </div>

                <div class="col-md-3 lightgraycols">
                    <h2>{this.props.value3}</h2>
                </div>

                <div class="col-md-3 orangecols">
                    <h2>{this.props.value4}</h2>
                </div>

            </div>
        )
    }
};

export default Major;