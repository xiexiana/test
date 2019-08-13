import React from 'react';
import '../../css/cartbody.css';
import '../../css/carthead.css';
import '../../css/cartfoot.css';

//头部
class HeadTitle extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			wantdel:props.wantdel,
		}
		this.del=this.del.bind(this);
	}
	del(){
		this.setState({
			wantdel:!this.state.wantdel
		});
		this.props.delCallback(this.state.wantdel);
	}
	render(){
		const {checklen,del}=this.props;
		return (
			<header className="cartheader">
				<div className="head-content">
					<div>
						<p>共<span id="head-jianshu">{checklen}</span>件宝贝  </p>
					</div>
					<div>
					<p> 购物车</p>
					</div>
					<div>
						<p id="shezhi" onClick={this.del}>设置</p>
					</div>
				</div>
			</header>
		);
	}
}

//商品单项
class ShopRow extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			count: props.count,
			img:require('../../images/airpods.jpg'),
		}
		this.isCheck=this.isCheck.bind(this);
	}
	add = (price) => {
		this.state.count += 1;
		this.setState({
			count: this.state.count,
		});
		this.props.totalCallback(price,this.props.isChecked,this.props.id);
	}
	rd = (price) => {
		if(this.state.count>1){
			this.state.count -= 1;
			this.setState({
				count: this.state.count,
			});
			this.props.totalCallback(-price,this.props.isChecked,this.props.id);
		}
	}
	isCheck(){
		this.state.totalPrice=this.props.price * this.state.count;
		const isChecked = !this.props.isChecked;
		this.setState({
			isChecked,
			totalPrice:this.state.totalPrice,
		});
		console.log(isChecked);
		this.props.isCheckCallback(this.state.totalPrice, isChecked, this.props.id);
	}
	render() {
		const {count,img} = this.state;
		const {handleCheck, name, color, price,rd,add,totalJian,checklen, isChecked} = this.props;
		return(
			<div className="main-content">
				<div className="main-content-left">
					<div
						className="choice-btn"
						onClick={this.isCheck}
					>
						<p className="xuanze"
						style={{display: isChecked ? 'block' : 'none'}}
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
		);
	}
}
//总计
class TotalBlock extends React.Component{
	constructor(props) {
		super(props);
		this.state={
			isAllCheck:false
		}
		this.isCheckedAll=this.isCheckedAll.bind(this);
		this.delgood=this.delgood.bind(this);
	}
	isCheckedAll = () => {
		const isAllCheck = !this.state.isAllCheck;
		this.setState({
			isAllCheck
		});
		this.props.handleCheckAll(isAllCheck);
	}
	shouldComponentUpdate(newProps,newState) {
		if(newProps.totalJian !== this.props.totalJian) {
			if(newProps.totalJian==this.props.checklen){
				this.state.isAllCheck=true;
				this.setState({
					isAllCheck: true
				});
			/* 	this.props.setAllCheckCallback(!this.state.isAllCheck); */
			}
			else{
				this.state.isAllCheck=false;
				this.setState({
					isAllCheck: false
				},()=>{
					this.props.setAllCheckCallback(!this.state.isAllCheck);
				});
			}
		}
		
		return true;
	}
	delgood(){
		this.props.delbuyCallback();
	}
	render() {
		const {isAllCheck} = this.state;
		const {isCheckedAll, handleCheck, totalPrice, totalJian,checklen,wantdel} = this.props;
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
			<div className="amount" style={{display:!wantdel?'block':'none'}}>
				<p>合计:</p>
				<p className="money"> ¥ <span>{totalPrice}</span> </p>
				<button className="buttonorge"
				>结算( <span>{totalJian}</span>  )</button>
			</div>
			<div className="amount" style={{display:wantdel?'block':'none'}}>
				<button className="buttonorge"
				onClick={this.delgood}
				> <span id="del">删除</span> </button>
			</div>
			</footer>
		);
	}
}

class ShopCar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			shopCartList:[],
			totalPrice:0,
			totalJian:0,
			checklen:'',
			wantdel:false
		};
		this.delbuyCallback=this.delbuyCallback.bind(this);
		this.huoqushuju=this.huoqushuju.bind(this);
	}
	huoqushuju(){
		const shopList = JSON.parse(localStorage.getItem("list"));
		const buy=JSON.parse(sessionStorage.getItem('buy'));
		const n=0;
		this.state.shopCartList=[];
		for(let m in shopList){
			for(let n in buy){
				if(shopList[m].id==buy[n]){
					var vote={};
					vote.id=shopList[m].id;
					vote.name=shopList[m].name;
					vote.color=shopList[m].color;
					vote.price=shopList[m].price;
					vote.count=shopList[m].count;
					vote.ischecked=false;
					this.state.shopCartList.push(vote);
				}
			}
		}
		this.state.checklen=this.state.shopCartList.length;
		this.setState({
			checklen:this.state.checklen,
			shopCartList:this.state.shopCartList
		})
	}
	componentDidMount() {
		this.huoqushuju();
	}
	
	totalCallback = (total,isCheck,id) => {
		if(isCheck){
			this.state.totalPrice+=total;
		}
		for(let i in this.state.shopCartList){
			if(this.state.shopCartList[i].id==id){
				if(total>0)
				this.state.shopCartList[i].count+=1;
				else
				this.state.shopCartList[i].count-=1;
			}
		}
		this.setState({
			totalPrice: this.state.totalPrice,
			shopCartList:this.state.shopCartList,
		});
	}
	handleCheckAll = (isAllCheck)=>{
		this.state.totalPrice=0;
		this.state.totalJian=0;
		if(isAllCheck){
			this.state.shopCartList.forEach((item)=>{
				this.state.totalPrice+=item.count*item.price;
				this.state.totalJian+=1;
				item.ischecked=true;
			});
			this.setState({
				totalPrice: this.state.totalPrice,
				totalJian: this.state.totalJian,
				shopCartList:this.state.shopCartList
			});
		}else{
			this.state.shopCartList.forEach((item)=>{
				item.ischecked=false;
			});
			this.setState({
				totalPrice: 0,
				shopCartList:this.state.shopCartList,
			});
		}
		this.setState({
			isAllCheck: isAllCheck
		});
	}
	setAllCheckCallback= (isAllCheck)=>{
		this.setState({
			isAllCheck: !isAllCheck
		});
	}
	isCheckCallback = (pri,ischeck,id) => {
		if(ischeck){
			this.state.totalJian+=1;
			this.state.totalPrice+=pri;
		}else{
			if(this.state.totalJian>0){
				this.state.totalJian-=1;
				this.state.totalPrice-=pri;
			}
		}
		for(let i in this.state.shopCartList){
			if(this.state.shopCartList[i].id==id){
				this.state.shopCartList[i].ischecked = ischeck;
			}
		}
		this.setState({
			totalJian:this.state.totalJian,
			totalPrice:this.state.totalPrice,
			shopCartList:this.state.shopCartList,
		});
	}
	delCallback=(isdel)=>{
		this.setState({
			wantdel:!isdel
		});
	}
	delbuyCallback(){
		const buy=JSON.parse(sessionStorage.getItem('buy'));
		 for(let k in this.state.shopCartList){
			 console.log(k,this.state.shopCartList[k]);
			 if(this.state.shopCartList[k].ischecked){
				for(let t in buy){
					if(buy[t]==this.state.shopCartList[k].id){
						buy.splice(t,1);
					}
				}
			} 
		}
		sessionStorage.setItem("buy",JSON.stringify(buy));
		this.huoqushuju();
		
	}
	render(){
		const {isAllCheck, ischeck, shopCartList} = this.state;
		console.log(shopCartList);
		return(
			<div>
				<HeadTitle 
					checklen={this.state.checklen}
					wantdel={this.state.wantdel}
					delCallback={this.delCallback}
				/>
				<div className="main">
				{
					shopCartList.map((item,index) => (
						<ShopRow
							key={index}
							id={item.id}
							name={item.name}
							color={item.color}
							price={item.price}
							count={item.count}
							isChecked={item.ischecked}
							isAllCheck={isAllCheck}
							totalCallback={this.totalCallback}
							isCheckCallback={this.isCheckCallback}
							AllCallback={this.AllCallback}
							checklen={this.state.checklen}
						/>
						)
					)
				}
				</div>
				<TotalBlock
					isAllCheck={this.state.isAllCheck}
					totalPrice={this.state.totalPrice}
					totalJian={this.state.totalJian}
					handleCheckAll={this.handleCheckAll}
					checklen={this.state.checklen}
					ischeck={ischeck}
					setAllCheckCallback={this.setAllCheckCallback}
					wantdel={this.state.wantdel}
					delbuyCallback={this.delbuyCallback}
				/>
			</div>
		)
		
	}
}
/* class App extends React.Component{
	render(){
		return(
			<ShopCar shopCartList={shopCartList} />
		);
	}
} */
 export default ShopCar;
