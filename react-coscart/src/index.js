import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';
import Goodslist from './js/goodslist/goodslist.js';
import GdIfmat from './js/goodinf/gdifmat.js';
import BuyCart from './js/buycart/react.js';
import Root from './js/root.js';

ReactDOM.render(
	(
		<BrowserRouter>
			<Root>
				<Route exact component={Goodslist} path="/"></Route>
				<Route component={BuyCart} path="/buycart"></Route>
				<Route component={GdIfmat} path="/ifmat"></Route>
			</Root>
		</BrowserRouter>
	), document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
