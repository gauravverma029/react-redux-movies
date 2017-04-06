import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchCharacter,fetchCharacterSuccess,fetchCharacterFailur} from  '../../actions/flims';

class Childcharacter extends Component{
	
    constructor(props){
		super(props);
		this.state = {activeUrl: this.props.item.url }
	}
    
    componentWillMount(){
		this.props.fetchCharacter(this.props.item.url);
	}
	
	componentWillReceiveProps(props){
		if(this.state.activeUrl !== props.item.url){
			this.setState({
				activeUrl: props.item.url
			});
			this.props.fetchCharacter(props.item.url);
		}
	}
	renderData(data){
		return(
				<div className="col-md-12">
			          <div className="thumbnail">
			            <div className="caption">
			               <div className="col-md-12">
			                <h3><span className="glyphicon glyphicon-user" aria-hidden="true"></span>  {typeof data.character.name !== 'undefined'?data.character.name:''}</h3>
			               </div>
			              <div className="col-md-6">
                                 <p><strong>Birth year</strong> :- {data.character.birth_year}</p>
			              		 <p><strong>Eye color</strong> :- {data.character.eye_color}</p>
			              		 <p><strong>Gender</strong> :- {data.character.gender}</p>
			              </div>	
			              <div className="col-md-6">
							<p><strong>Hair color</strong> :- {data.character.hair_color}</p>
			                <p><strong>Height</strong>:- {data.character.height}</p>
			                <p><strong>Mass</strong>:- {data.character.mass}</p>
			              </div>  
						 </div>
			          </div>
				</div>
			)
	}


	render(){
		const { Activecharacter, loading, error } = this.props.flims.activeCharacter;
		if(error){
	       return ( <div className="row">Error.....</div>) 
	    }
		if(loading){
	       return ( <div className="row">Loading...</div> ) 
	    }
		return (
				 <div className="row">
					{this.renderData(this.props.flims.activeCharacter)}
				 </div>
			)
	}
} 

const mapStateToProps = (state) => {
    return {...state};

}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCharacter: (url) => {
         dispatch(fetchCharacter(url)).then((response) => {
            !response.error ? dispatch(fetchCharacterSuccess(response.payload.data)) : dispatch(fetchCharacterFailur(response.payload.data));
          });
    }
  }
}

const tmpChildcharacter = connect(mapStateToProps, mapDispatchToProps)(Childcharacter);

export default tmpChildcharacter;