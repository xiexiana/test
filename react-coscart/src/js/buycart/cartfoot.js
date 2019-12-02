import React from 'react';
import '../../css/cartfoot.css';


export default class CartFoot extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			isAllCheck:false,
		}
		this.isCheckedAll=this.isCheckedAll.bind(this);
	}
	isCheckedAll(){
		console.log(this.state.isAllCheck);
		this.setState({
			isAllCheck:!this.state.isAllCheck,
		}, () => {
			/* this.props.handleCheckAll(!this.state.isAllCheck); */
		});
		
	}

	render() {
		const {isAllCheck} = this.state;
		const {isCheckedAll, handleCheck, totalPrice, totalJian,checklen} = this.props;
		return(
			<footer className="cartfooter">
			<div className="foot-quanxuan">
				<div className="choice-btn" onClick={this.isCheckedAll}>
					<p className="quanxuan" 
					style={{display: isAllCheck? 'block' : 'none'}}
					/>
				</div>
				<span>全选</span>
			</div>
			<div className="amount">
				<p>合计:</p>
				<p className="money"> ¥ <span>{totalPrice}</span> </p>
				<button className="buttonorge">结算( <span>{totalJian}</span>  )</button>
			</div>
			<div className="amount" style={{display: 'none'}}>
				<button className="buttonorge"> <span id="del">删除</span> </button>
			</div>
			</footer>
		);
	}
}