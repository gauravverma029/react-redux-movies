import React,{Component} from 'react';
import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Flimlist from './films/flimlist';
import Character from './films/character';
import './App.css';
const history = createHistory();
class App extends Component{
	render() {
		return(
			   <ConnectedRouter history={history}>
				 <div className="container">
				 	 <nav className="navbar navbar-default">
				        <div className="container-fluid">
				          <div className="navbar-header">
				            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				              <span className="sr-only">Toggle navigation</span>
				              <span className="icon-bar" />
				              <span className="icon-bar" />
				              <span className="icon-bar" />
				            </button>
				            <a className="navbar-brand" href="#">Flims Project - React & Redux</a>
				          </div>
				          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				            <ul className="nav navbar-nav">
				              <li className="active"><a href="/">All Flims</a></li>
				            </ul>
				             <ul className="nav navbar-nav navbar-right">
       							 <li><a href="#">By Gaurav Verma</a></li>
     						 </ul>

				          </div>
				        </div>
     				</nav>
			        <Route exact path="/" component={Flimlist}/>
			        <Route path="/character/:id" component={Character}/>
			      </div>
			    </ConnectedRouter>
  
			)
	}
}

export default App;


