import React from 'react';
import '../../css/goodinf.css';
import {NavLink} from 'react-router-dom';


 export default class GdIfmat extends React.Component{
	 constructor(props,context) {
	 	super(props,context);
	 	this.state = {
			day:{},
			collect: false
	 	}
		this.isCollect=this.isCollect.bind(this);
		this.buy=this.buy.bind(this);
	 }
	 componentDidMount(){
		 let arr={};
		 arr={...this.props.location.query};
		 arr=JSON.stringify(arr);
		 if(arr!="{}"){
			sessionStorage.setItem("date",arr); 
		 }
		 const day = JSON.parse(sessionStorage.getItem("date"));
		 const collectMsg = JSON.parse(sessionStorage.getItem("collectMsg"));
		 if(collectMsg!=null){
			 if(collectMsg.includes(day.id)) {
			 	this.setState({
			 	day,
			 	collect: true
			 	})
			 }else {
			 	this.setState({
			 		day,
			 		collect: false
			 	})
			 } 
		 }else{
			 this.setState({
			 	day,
			 	collect: false
			 })
		 }
	 }
	 isCollect(){
		 const {collect, day} = this.state;
		 const col=JSON.parse(sessionStorage.getItem('collectMsg'));
		 const c=[];
		this.setState({
			collect: !collect 
		}, () => {
			const ect = this.state.collect;
			if(ect) {
				c.push(day.id);
				for(let i in col){
					c.push(col[i]);
				}
				sessionStorage.setItem('collectMsg', JSON.stringify(c));
			}else {
				for(let i in col){
					if(c[i]==day.id){
						c.splice(i,1);
					}
				}
				sessionStorage.setItem('collectMsg', JSON.stringify(c));
			}
		});
	 }
	 buy(){
		 const {day} =this.state;
		 const b=[];
		 const by=JSON.parse(sessionStorage.getItem('buy')) ;
		 b.push(day.id);
		 for(let i in by){
			 b.push(by[i]); 
		 }
		 sessionStorage.setItem('buy',JSON.stringify(b)); 
	 }
	 render(){
		 const{day, collect}=this.state;
		 /* const goodlist=this.props.localtion.query.date; */
		 const {isCollect}=this.props;
		 return(
		 <>
			<div className="gdcontent">
				<div className="backdiv">
					<img src={day.img} />
					<NavLink to="/" className="back"></NavLink> 
				</div>
				<div className="ifmat-price">
					<p className="money">¥{day.price} </p>
					<p>{day.name} </p>
				</div>
			</div>
			<footer className="goodfooter">
			<div className="amount">
				<button className="buttonorgeone" onClick={this.buy}>立即购买</button>
				<button className="buttonyel"
				onClick={this.isCollect}
				style={{color:day.collect? 'black':'white'}}
				>{collect ? '已收藏' : '加入收藏'}</button>
			</div>
			</footer>
		</>
		 )
	 }
	 
 }