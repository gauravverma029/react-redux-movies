import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchFlims,fetchflimSuccess,fetchflimFailur} from  '../../actions/flims';
import { Link } from 'react-router-dom';

class Flimlist extends Component{

	componentWillMount(){
		this.props.fetchFlims();
	}

	renderfilms(flims){
		return flims.results.map((value,key)=>{
		return(
            <div className="col-sm-6 col-md-4" key={key}>
	          <div className="thumbnail">
	            <div className="caption">
	              <h3><span className="glyphicon glyphicon-camera" aria-hidden="true"></span> {value.title}</h3>
	              <p>Director : {value.director}</p>
	              <p>Producer : {value.producer}</p>
	              <p>Realease Date : {value.release_date}</p>
 				  <Link to={"character/" + key} className="btn btn-default">Explore <span className="glyphicon glyphicon-arrow-right" aria-hidden="true"></span> </Link>
				 </div>
	          </div>
	        </div>
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
				        {this.renderfilms(flims)}
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

const tmpFlimlist = connect(mapStateToProps, mapDispatchToProps)(Flimlist);

export default tmpFlimlist;
