import React from 'react';
import '../../css/listbody.css';
import {NavLink} from 'react-router-dom';



export default class ListBody extends React.Component{
	constructor(props) {
		super(props);
	    this.state={
			goodslist:[
				{
					id:1,
					name:"airpods耳机1",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 255,
					count:1,
				},
				{
					id:2,
					name:"airpods耳机2",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 75,
					count:1,
				},
				{
					id:3,
					name:"airpods耳机3",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 85,
					count:1,
				},
				{
					id:4,
					name:"airpods耳机4",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 77,
					count:1,
				},
				{
					id:5,
					name:"airpods耳机5",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 52,
					count:1,
				},
				{
					id:6,
					name:"airpods耳机6",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 198,
					count:1,
				},
				{
					id:7,
					name:"airpods耳机复古印花衬衫翻领短袖休闲",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 45,
					count:1,
				},
				{
					id:8,
					name:"airpods耳机7",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 32,
					count:1,
				},
				{
					id:9,
					name:"airpods耳机8",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 71,
					count:1,
				},
				{
					id:10,
					name:"airpods耳机9",
					color:'red',
					img:require('../../images/airpods.jpg'),
					price: 99,
					count:1,
				}
			]
		};
	}
	componentDidMount(){
	 	console.log(this.state.goodslist);
		let arr={...this.state.goodslist};
		arr=JSON.stringify(arr);
		localStorage.setItem("list",arr); 
	}
	render(){
		const{goodslist}=this.state;
		return(
			<div className="listby">
				{
					this.state.goodslist.map((item,index)=>{
						return(
							<div className="singlelist" key={index}>
							<NavLink to={{pathname:"/ifmat",query:item}}>
							 <img src={item.img} />
							 <p>{item.name}</p>
							 <p className="money">¥{item.price}</p>
							 </NavLink>
							</div>
						)
					})
				}
			</div>
		)
	}
}