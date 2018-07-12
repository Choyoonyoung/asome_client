import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import FormKey from './FormKey';

import styled from './FormStyle';

export default class CreateForm extends React.Component{
    constructor(props){
        super(props);
		
		this.state = {
			selectedKey: -1,
            keyword: '',
			name: '',
			form: [{ name:''}],
			keyform: ''
		};
		this.handleAddForm = this.handleAddForm.bind(this);
		this.handleRemoveForm = this.handleRemoveForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		
  
		
    }
	handleChange(e) {
        	let nextState ={};//비어있는 객체 만들기
            nextState[e.target.name] = e.target.value;
            this.setState(nextState)
    }
	handleAddForm = () => {
		this.setState ({
			form: this.state.form.concat([{name:''}])
		});
	}
	handleRemoveForm = (idx) =>() =>{
		this.setState({
			form: this.state.form.filter((s,sidx)=>idx !==sidx)
		});
	}
	
	
    render(){
		
		
      	return(
			   
		  <styled.Container>
			  <styled.FormBox>
				  <h2>회의록 작성 일지</h2>
				  <styled.Badge><styled.BadgeText>New</styled.BadgeText></styled.Badge>
			  </styled.FormBox>

					<styled.FormBox>
						<styled.FormLabel>
							<p >회의록 제목: </p>
						</styled.FormLabel>
						<styled.TitleForm/>
					</styled.FormBox>
					<styled.FormBox>
						<styled.FormGroup className="mb-2 mr-sm-2 mb-sm-0">
							<styled.FormLabel>
								<p>일자: </p>
							</styled.FormLabel>
							<input type="date" />
						</styled.FormGroup>
						<styled.FormGroup className="mb-2 mr-sm-2 mb-sm-0">
							<styled.FormLabel>
								<p>장소: </p>
							</styled.FormLabel>
							<input />
						</styled.FormGroup>
							<styled.FormLabel>
								<p>담당자: </p>
							</styled.FormLabel>
							<input />
						</styled.FormBox>
						<styled.FormGroup>
							<styled.Mt>
								<styled.FormLabel>
									<p >회의안건: 
									</p>
								</styled.FormLabel>
								<input style={{height: '200px', marginTop: '5px'}} type="textarea" />
							</styled.Mt>
						</styled.FormGroup>

						{this.state.form.map((form, idx) => (

						  <div className="form">		
		  					<styled.FormLabel>
								<p className="mb-3 mr-sm-3 mb-sm-0">쏼라쏼라</p>
		  					</styled.FormLabel>
							<p className="mb-3 mr-sm-3 mb-sm-0"> : </p>
							<styled.PlusForm
							  type="textarea"/>
							<styled.Button type="button" onClick={this.handleRemoveForm(idx)} className="small">-</styled.Button>
						  </div>
						))}
					<div>
						<styled.Button type="button" onClick={this.handleAddForm} className="small">+</styled.Button>
						<input value={this.state.keyform}
								onChange={this.handleChange}/>
					</div>

        	</styled.Container>
            
      )  
    }
}

CreateForm.propTypes = {
   
};
CreateForm.defaultProps = {
    
    
};