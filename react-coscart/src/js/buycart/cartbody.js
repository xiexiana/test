import React from 'react';
import '../../css/cartbody.css'

export default class CartBody extends React.Component{
	constructor(props) {
	super(props);
	this.state = {
		name:"airpods耳机香蕉芭娜娜 2019夏季新款小清新学生装刺绣上衣加牛仔",
		img:require('../../images/airpods.jpg'),
		price: '255',
		color:'white',
		count:1,
		isChecked:false, 
		}
		this.isCheck=this.isCheck.bind(this);
	}
	add = (price) => {
		this.state.count += 1;
		this.setState({
			count: this.state.count,
		});
	 	/* this.props.totalCallback(price,this.state.isChecked); */
	}
	rd = (price) => {
		if(this.state.count>1){
			this.state.count -= 1;
			this.setState({
				count: this.state.count,
			});
			//this.props.totalCallback(-price,this.state.isChecked);
		}
	}
	isCheck(){
		this.state.totalPrice=this.props.price * this.state.count;
		this.setState({
			isChecked:!this.state.isChecked,
			totalPrice:this.state.totalPrice,
		});
		//this.props.isCheckCallback(this.state.totalPrice,this.state.isChecked);
	}
	render(){
		const{name,img,price,color,count}=this.state;
		return(
			<div className="main-content">
				<div className="main-content-left">
					<div 
						className="choice-btn"
						onClick={this.isCheck}
					>
						<p className="xuanze"
						style={{display: this.state.isChecked ? 'block' : 'none'}}
						/>
					</div>
					<img src={img} />
				</div>
				<div className="main-content-right">
					<h3 className="main-content-right-title">{name}</h3>
					<p className="main-content-right-span">{color}</p>
					<div className="amount posi">
						<p className="money"> ¥ <span className="price"> {price} </span> </p>
						<div className="amount-btn">
							<button className="reduce" onClick={() => {this.rd(price)}}>-</button>
							<p className="mount-num" >{count}</p>
							<button className="add" onClick={() => {this.add(price)}}>+</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}