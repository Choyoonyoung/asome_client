import React from 'react';
import PropTypes from 'prop-types';

import styled from './HomeStyle';

export default class NoteCreate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            phone:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e){
        if (e.charCode===13){
            this.handleClick();
        }
    }
    handleChange(e){
            let nextState ={};//비어있는 객체 만들기
            nextState[e.target.name] = e.target.value;
            this.setState(nextState)
    }
    handleClick(){
       const contact = {
           name:this.state.name,
           phone:this.state.phone
       };
        this.props.onCreate(contact);
        this.setState({
            name:'',
            phone:''
            
        });
        this.nameInput.focus();
    }
        
    
    render(){
      return(
		  
        <div >
		  
			  <h4>Create Memo</h4>

		  		<styled.CreateMemo>
					<input
					type="text"
					name="name"
					placeholder="title"
					value={this.state.name}
					onChange={this.handleChange}
					ref={(ref) => this.nameInput = ref}
					/>
					<input
					type="name"
					name="phone"
					style={{height: '100px'}}
					value={this.state.phone}
					onChange={this.handleChange}
					onKeyPress={this.handleKeyPress}
					/>
				</styled.CreateMemo>

			  <styled.Button onClick={this.handleClick}>메모 추가</styled.Button>
			
        </div>
            
      )  
    }
}

NoteCreate.propTypes = {
    onCreate: PropTypes.func
};
NoteCreate.defaultProps = {
    onCreate: () => { console.error('onCreate not defined')}
    
}