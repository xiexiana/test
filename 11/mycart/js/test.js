
function Repeat(props){
	let items = [];
	for(let i = 0; i < props.numTimes;i++){
		console.log(items);
		items.push(props.children(i));
		console.log(props.children(i));
		console.log(items);
	}
	return <div>{items}</div>
}
class App extends React.Component{
	render(){
		return(
			<Repeat numTimes={10}>
				{(index) => <div key={index}>This is item {index} in
				the list </div>}
			</Repeat>
		);
	}
}

ReactDOM.render(<App />, document.getElementsByClassName("main")[0]);