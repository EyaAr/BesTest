import {
    LOAD_ADMIN,
    FAIL_ADMIN,
    GET_PARENTS,
    GET_TEACHERS,
    GET_TEACHERS_V,
    GET_PARENTS_V,
    GET_KIDS,
    GET_KIDS_VALIDER
  } from "../Constants/admin";

  // InitialState

const InitialState = {
    ParentRequests: [],
    ParentValid: [],
    TeacherRequests: [],
    TeacherValid: [],
    KidRequests: [],
    KidValid: [],
    loadAdmin: false,
    errors: [],
  };

  // PURE FUNCTION

const adminReducer = (state = InitialState, { type, payload }) => {
    switch (type) {
      case LOAD_ADMIN:
        return { ...state, loadAdmin: true };
      case GET_PARENTS:
        return {
          ...state,
          ParentRequests: payload,
          loadAdmin: false,
          errors: [],
        };
      case GET_PARENTS_V:
        return {
          ...state,
          ParentValid: payload,
          loadAdmin: false,
          errors: [],
        };
      case GET_TEACHERS:
        return {
          ...state,
          TeacherRequests: payload,
          loadAdmin: false,
          errors: [],
        };
        case GET_TEACHERS_V:
        return {
          ...state,
          TeacherValid: payload,
          loadAdmin: false,
          errors: [],
        };
        case GET_KIDS:
        return {
          ...state,
          KidRequests: payload,
          loadAdmin: false,
          errors: [],
        };
        case GET_KIDS_VALIDER:
        return {
          ...state,
          KidValid: payload,
          loadAdmin: false,
          errors: [],
        };
      case FAIL_ADMIN:
        return {
          ...state,
          loadClient: false,
          errors: payload,
        };
      default:
        return state;
    }
  };
  
  export default adminReducer;