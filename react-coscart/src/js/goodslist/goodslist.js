import React from "react";
import ListHead from './list-head.js';
import ListBody from './list-body.js';



export default class GoodsList extends React.Component{
	render(){
		return(
			<div>
				<ListHead />
				<ListBody />
			</div>
		)
	}
}