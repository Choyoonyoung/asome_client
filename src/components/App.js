import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';
import styled from './AppStyle';
import Form from './Form';

import Home from './Home';

class App extends Component {
  render() {
    return (
		<Router>
      		<div>
				<Header />
				<styled.Container>
					<Navbar />
					<Route exact path="/" component={Home}/>
					<Route path="/meeting" component={Form}/>
				</styled.Container>
				<Footer />
			</div>
		</Router>
    );
  }
}

export default App;
