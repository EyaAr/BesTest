import {
    GET_EXERCICES,
    GET_EXERCICE,
    EXERCICE_ERROR,
    DELETE_LESSON,
    DELETE_EXERCICE,
    ADD_EXERCICE,
    GET_LESSONS
  } from '../Actions/Types';
  
  const initialState = {
      lessons:[],
    exercices: [],
    exercice: null,
    loading: true,
    error: {},
  };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_LESSONS:
            return{
                ...state,
                lessons: payload,
                loading: false,
            };
      case GET_EXERCICES:
        return {
          ...state,
          exercices: payload,
          loading: false,
        };
    
      case ADD_EXERCICE:
        return {
          ...state,
          exercices: [payload, ...state.exercices],
          loading: false,
        };
      case DELETE_EXERCICE:
        return {
          ...state,
          exercices: state.exercices.filter((exercice) => exercice._id !== payload),
          loading: false,
        };
        case DELETE_LESSON:
          return {
            ...state,
            exercices: state.exercices.filter((exercice) => exercice._id !== payload),
            loading: false,
          };
      case EXERCICE_ERROR:
        return {
          ...state,
          error: payload,
          loading: false,
        };
    
      default:
        return state;
    }
  }