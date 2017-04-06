import axios from 'axios';

export const FETCH_FLIMS = 'FETCH_FLIMS';
export const FETCH_FLIMS_SUCCESS = 'FETCH_FLIMS_SUCCESS';
export const FETCH_FLIMS_FAILURE = 'FETCH_FLIMS_FAILURE';

export const FETCH_FLIMS_CHARACTER = 'FETCH_FLIMS_CHARACTER';
export const FETCH_FLIMS_CHARACTER_SUCCESS = 'FETCH_FLIMS_CHARACTER_SUCCESS';
export const FETCH_FLIMS_CHARACTER_FAILURE = 'FETCH_FLIMS_CHARACTER_FAILURE';

const ROOT_URL = 'http://swapi.co/api/';

export function fetchFlims(){
 
  const request = axios({
    method: 'get',
    url: ROOT_URL + 'films'
  });

  return {
    type: FETCH_FLIMS,
    payload: request
  };
}

export function fetchflimSuccess(films){
	
	return {
     type: FETCH_FLIMS_SUCCESS,
     payload: films
   };

}

export function fetchflimFailur(error){
	return {
     type: FETCH_FLIMS_FAILURE,
     payload: error
   };	
}


export function fetchCharacter(url){
  console.log(url);
  const request = axios({
     method: 'get',
    url: url
  });

  return {
    type: FETCH_FLIMS_CHARACTER,
    payload: request
  };
}


export function fetchCharacterSuccess(character){
  
  return {
     type: FETCH_FLIMS_CHARACTER_SUCCESS,
     payload: character
   };

}

export function fetchCharacterFailur(error){
  return {
     type: FETCH_FLIMS_CHARACTER_FAILURE,
     payload: error
   }; 
}
