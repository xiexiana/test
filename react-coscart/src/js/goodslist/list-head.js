import React from 'react';
import '../../css/listhead.css';
import '../../css/font/iconfont.css';

export default class ListHead extends React.Component{
	render(){
		return(
			<header className="listheader">
				<div className="head">
					<input />
					<button className="iconfont icon-sousuo"></button>
				</div>
			</header>
		)
	}
}