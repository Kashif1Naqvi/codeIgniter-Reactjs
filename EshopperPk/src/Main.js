import React,{Component} from 'react';
import Index from './frontEnd/Index';
import Admin from './Admin/Admin';
import {BrowserRouter as Router,Route ,IndexRoute, browserhHistory,Switch,HashRouter} from  'react-router-dom';

class Main extends Component{
	render(){
		return(
			<div>
         		<Router>
										<Route path="/" component={render=><Index/>} >
											<Route path="/" component={render=><Index/>} />
										</Route>
						</Router>
     		</div>

		);
	}
}
export default Main;
