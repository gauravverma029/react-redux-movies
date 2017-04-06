import {FETCH_FLIMS,FETCH_FLIMS_SUCCESS,FETCH_FLIMS_FAILURE,FETCH_FLIMS_CHARACTER,FETCH_FLIMS_CHARACTER_SUCCESS,FETCH_FLIMS_CHARACTER_FAILURE} from '../actions/flims';
const INTIAL_STATE = {
						flimlist:{flims:[],error:null,loading:true},
						activeCharacter:{character:null,error:null,loading:true}
					};
export default function (state = INTIAL_STATE , action){
	let error;
	switch(action.type){
    	case FETCH_FLIMS:
    	  return {...state,flimlist:{flims:[],error:null,loading:true}};
    	case FETCH_FLIMS_SUCCESS:
    	    return {...state,flimlist:{flims:action.payload,error:null,loading:false}};
    	case FETCH_FLIMS_FAILURE:
    	    return {...state,flimlist:{flims:[],error:error,loading:false}};

    	case FETCH_FLIMS_CHARACTER:
    	  return {...state,activeCharacter:{...state.activeCharacter,error:null,loading:true}};
    	case FETCH_FLIMS_CHARACTER_SUCCESS:
    	    return {...state,activeCharacter:{character:action.payload,error:null,loading:false}};
    	case FETCH_FLIMS_CHARACTER_FAILURE:
    	    return {...state,activeCharacter:{character:action.payload,error:error,loading:false}};    
    	default:
    		return state;    
    		   			
	}
}