import React from 'react';
 import{NavLink} from 'react-router-dom'; 

import '../css/footer.css';

export default class Footer extends React.Component{
	
	render(){
		return(
			<footer>
				<div>
					<ul>
						<li>< NavLink to="/">首页</NavLink></li>
						<li>< NavLink to="/buycart">购物车</NavLink></li>
					</ul>
				</div>
			</footer>
		)
	}
}