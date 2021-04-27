import React from 'react';

class Display extends React.Component{
    
    render(){
        return (
            <div class="row text-right">
                <div class="col-md-12 display">
                    <h1>{this.props.display}</h1>
                </div>
            </div>
        )
    }
};

export default Display;

