import React from 'react';

export default class FormKey extends React.Component{
    render(){
		
        return(
            
        <div>
            {this.props.form.key}
           </div>
        );
    }
}