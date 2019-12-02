import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import GoodsList from './goodslist/goodslist.js';

export default class Index extends React.Component{
	render(){
		return(
			<div>
				{this.props.children}
				<Footer />
			</div>
		)
	}
}