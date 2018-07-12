import React from 'react';
import styled from './LoginStyle';
export default class Login extends React.Component {
  render() {
	  
	  
    return (
		<styled.Container>
			<styled.Box>
			<div>
				  <p >Email</p>
				  <input type="email" name="email" id="exampleEmail" placeholder="Email" />

				  <p for="examplePassword" hidden>Password</p>
				  <input type="password" name="password" id="examplePassword" placeholder="Password" />
			</div>
			{' '}
			<button color="primary">Submit</button>
		  </styled.Box>
		</styled.Container>
		
    );
  }
}