import React from 'react';
import '../../css/carthead.css';


const shopCartList=[
	{
		name:'shop1',
		color:'red',
		price:94,
		count:1,
		isChecked:false,
	},
	{
		
		name:'shop2',
		color:'red',
		price:195,
		count:1,
		isChecked:false,
	},
	{
		
		name:'shop3',
		color:'red',
		price:50.7,
		count:1,
		isChecked:false,
	},
];
export default class CartHead extends React.Component{
	render(){
		return(
			<header className="cartheader">
				<div> <p> 购物车</p></div>
				<div> <p> 管理</p></div>
			</header>
		)
	}
}