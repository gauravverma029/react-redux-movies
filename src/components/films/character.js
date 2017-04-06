import React,{Component} from 'react';
import {fetchFlims,fetchflimSuccess,fetchflimFailur} from  '../../actions/flims';
import {connect} from 'react-redux';
import Childcharacter from './childcharacter';

class Character extends Component{
	constructor(props){
		super(props);
		this.loadcharacter = this.loadcharacter.bind(this);
		this.state = { showChild: false }
	}
	componentWillMount(){

		if(this.props.flims.flimlist.flims.length === 0)
			this.props.fetchFlims();
	}
	
	loadcharacter(e){
		this.setState({
			showChild: true,
			childItem: {url: e.target.getAttribute('data-url')}
		})
	}

	rendercharacter(flims){
	  var characters = 	this.props.flims.flimlist.flims.results[this.props.match.params.id]['characters'];
	  return characters.map((value,key)=>{
        return (
      		  <a href="javascript:void(0)" className="list-group-item" key={key} onClick={this.loadcharacter} data-url={value}>Character {key + 1} <span className="glyphicon glyphicon-menu-right" aria-hidden="true"></span></a>
      	)
	  })
    }
	render(){
		const { flims, loading, error } = this.props.flims.flimlist;
		if(error){
	       return ( <div className="row">Error.....</div>) 
	    }
		if(loading){
	       return ( <div className="row">Loading.....</div>) 
	    }
		return (
				 <div className="row">
					 <div className="col-md-3 col-sm-3">
						 <ul className="list-group">
						  {this.rendercharacter(flims)}
						</ul>
					</div>
					 <div className="col-md-9 col-sm-9">
					       {this.state.showChild && <Childcharacter item={this.state.childItem} /> }
					       {!this.state.showChild && <div className="page-header">
  								<h1><small>Select at least one character</small></h1>
							</div> }
					 </div>
				</div>
			)
	}
} 

const mapStateToProps = (state) => {
    return {...state};

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchFlims: () => {
         dispatch(fetchFlims()).then((response) => {
            !response.error ? dispatch(fetchflimSuccess(response.payload.data)) : dispatch(fetchflimFailur(response.payload.data));
          });
    }
  }
}

const tmpCharacter = connect(mapStateToProps, mapDispatchToProps)(Character);

export default tmpCharacter;