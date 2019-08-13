import React from 'react';
import CartHead from './carthead.js';
import CartBody from './cartbody.js';
import CartFoot from './cartfoot.js';


export default class BuyCart extends React.Component{
	render(){
		return(
		<div>
			<CartHead />
			<CartBody />
			<CartFoot />
		</div>
		)
	}
}