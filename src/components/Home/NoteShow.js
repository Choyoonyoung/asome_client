import React from 'react';
import PropTypes from 'prop-types';

import styled from './HomeStyle';

export default class NoteShow extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            isEdit: false,
            name: '',
            phone: ''
        };
		

        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleEdit(){
        this.props.onEdit(this.state.name, this.state.phone);
        
    }
    handleToggle(){
        if(!this.state.isEdit){
            this.setState({
                name :this.props.contact.name,
                phone:this.props.contact.phone
            });
        }
        else{
            this.handleEdit();
        }
        this.setState({//비동기
            isEdit: !this.state.isEdit
        });
        //console.log(this.state.isEdit);
        //setState 이후 바뀐 값을 보이게 하려면 console.log(!this.state.isEdit);
        
    }
    handleChange(e){
            let nextState ={};//비어있는 객체 만들기
            nextState[e.target.name] = e.target.value;
            this.setState(nextState)
    }    
    handleKeyPress(e){
        if (e.charCode==13){
            this.handleToggle();
        }
    }
    render(){
		
		const style={
					border:{
						border: '1px',
						borderRadius:'10px',
						backgroundColor: 'AliceBlue'
						}
					};
        
                                          
        const details = ( <div>
                         <p style={{backgroundColor: 'LightGray'}}>{this.props.contact.name}</p>
                         <p style={style.border}>{this.props.contact.phone}</p>
                         </div> 
                        );
        
        const edit = (
        <div>

            <p>
                <input
                type="text"
                name="name"
                placeholder="name"
                value={this.state.name}
                onChange={this.handleChange}
          />
            </p>
            
            <p>
                <input style={{height:'200px'}}
                type="name"
                name="phone"
                placeholder="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
                />
          </p>
        </div>
        )
        
        const view = this.state.isEdit ? edit : details;
        const blank =(<div>Not Selected</div> 
                        );
        

        
        
        return(
            <div>
                <h4>Memo details</h4>
                {this.props.isSelected ? view : blank}
            
                <p>
                    <button  size="sm" outline onClick={this.handleToggle}>{this.state.isEdit ? 'OK' : 'Edit'}</button>
                    <button size="sm" style={{marginLeft: '5px'}} outline  onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
         );
    }
}

NoteShow.defaultProps = {
    contact: {
        name: '',
        phone:''
    },
    onRemove: () => {console.error('onRemove not defined');},
    onEdit: () => {console.error('onEdit not defined');}
}
NoteShow.propTypes = {
    contact: PropTypes.object,
    onRemove:PropTypes.func,
    onEdit:PropTypes.func
}