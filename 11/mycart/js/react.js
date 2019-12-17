//头部
class HeadTitle extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const {checklen}=this.props;
		return (
			<header>
				<div className="head-title">
					<p className="back"><span> Back</span></p>
					<span style= {{marginLeft: -60}}>购物车</span>
				</div>
				<div className="head-content">
					<div>
						<p>共<span id="head-jianshu">{checklen}</span>件宝贝  </p>
					</div>
					<div>
						<p id="shezhi">设置</p>
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
			isChecked:false, 
		}
		this.isCheck=this.isCheck.bind(this);
	}
	shouldComponentUpdate(newProps, newState) {
		console.log(newProps.isAllCheck, this.props.isAllCheck);
		if(newProps.isAllCheck !== this.props.isAllCheck) {
			if(newProps.isAllCheck){
				this.setState({
					isChecked: newProps.isAllCheck
				});
			}
			if(!newProps.isAllCheck&&this.props.totalJian==this.props.checklen){
				this.setState({
					isChecked: newProps.isAllCheck
				});
			}
		}
        return true;
  }
	add = (price) => {
		this.state.count += 1;
		this.setState({
			count: this.state.count,
		});
		this.props.totalCallback(price,this.state.isChecked);
	}
	rd = (price) => {
		if(this.state.count>1){
			this.state.count -= 1;
			this.setState({
				count: this.state.count,
			});
			this.props.totalCallback(-price,this.state.isChecked);
		}
	}
	isCheck(){
		this.state.totalPrice=this.props.price * this.state.count;
		this.setState({
			isChecked:!this.state.isChecked,
			totalPrice:this.state.totalPrice,
		});
		this.props.isCheckCallback(this.state.totalPrice,this.state.isChecked);
	}
	render() {
		const {count,isChecked} = this.state;
		const {isCheck, handleCheck, name, color, price,rd,add,totalJian,checklen} = this.props;
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
					<img src="img/ipod_medium.jpg" />
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
			isAllCheck:false,
		}
		this.isCheckedAll=this.isCheckedAll.bind(this);
	}
	isCheckedAll(){
		console.log(this.state.isAllCheck);
		this.setState({
			isAllCheck:!this.state.isAllCheck,
		}, () => {
			this.props.handleCheckAll(!this.state.isAllCheck);
		});
		
	}
	shouldComponentUpdate(newProps, newState) {
		console.log(newProps.totalJian, this.props.totalJian);
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
	render() {
		const {isAllCheck} = this.state;
		const {isCheckedAll, handleCheck, totalPrice, totalJian,checklen} = this.props;
		return(
			<footer>
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
class ShopCar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			shopCartList:this.props.shopCartList,
			totalPrice:0,
			totalJian:0,
			checklen:this.props.shopCartList.length,
		};
	}
	totalCallback = (total,isCheck) => {
		if(isCheck){
			this.state.totalPrice+=total;
		}
		this.setState({
			totalPrice: this.state.totalPrice,
			shopCartList:this.state.shopCartList,
		});
	}
	handleCheckAll = (isAllCheck)=>{
		this.state.totalPrice=0;
		this.state.totalJian=0;
		if(!isAllCheck){
			this.state.shopCartList.forEach((item)=>{
				this.state.totalPrice+=item.count*item.price;
				this.state.totalJian+=1;
			});
			this.setState({
				totalPrice: this.state.totalPrice,
				shopCartList:this.state.shopCartList,
			});
		}	
		this.setState({
			isAllCheck: !isAllCheck
		});
	}
	setAllCheckCallback= (isAllCheck)=>{
		this.setState({
			isAllCheck: !isAllCheck
		});
	}
	isCheckCallback = (pri,ischeck) => {
		if(!ischeck){
			this.state.totalJian+=1;
			this.state.totalPrice+=pri;
		}else{
			this.state.totalJian-=1;
			this.state.totalPrice-=pri;
			this.setState({
				ischeck: !ischeck
			});
		}
		this.setState({
			totalJian:this.state.totalJian,
			totalPrice:this.state.totalPrice,
		});
	}
	render(){
		const {isAllCheck,ischeck} = this.state;
		return(
			<div>
				<HeadTitle 
					checklen={this.state.checklen}
				/>
				{
					this.state.shopCartList.map((item,index) => (
						<ShopRow
							key={index}
							name={item.name}
							color={item.color}
							price={item.price}
							count={item.count}
							isChecked={item.isChecked}
							isAllCheck={isAllCheck}
							totalCallback={this.totalCallback}
							isCheckCallback={this.isCheckCallback}
							AllCallback={this.AllCallback}
							totalJian={this.state.totalJian}
							checklen={this.state.checklen}
						/>
						)
					)
				}
				<TotalBlock
					isAllCheck={this.state.isAllCheck}
					totalPrice={this.state.totalPrice}
					totalJian={this.state.totalJian}
					handleCheckAll={this.handleCheckAll}
					checklen={this.state.checklen}
					ischeck={ischeck}
					setAllCheckCallback={this.setAllCheckCallback}
				/>
			</div>
		)
		
	}
}
class App extends React.Component{
	render(){
		return(
			<ShopCar shopCartList={shopCartList} />
		);
	}
}

ReactDOM.render(<App />, document.getElementsByClassName("main")[0]);
