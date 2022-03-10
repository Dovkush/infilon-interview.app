import { DELETE_USER_DATA, EDIT_USER_DATA, GET_USER_DATA } from "../actions/actions";
type InitialState={
    page?:number,
    per_page?:number,
    total?:number,
    total_pages?:number,
    data:{id:number,email:string,first_name:string,last_name:string,avatar:string}[],
    url?:string,
    text?:string,
}
const INITIAL_STATE :InitialState= {
   data:[],
};
export const GetUserReducer = (state = INITIAL_STATE, action:{type:string,payload:InitialState}) => {
  switch (action.type) {

    case GET_USER_DATA:
      return {
        ...action.payload,
        data:[action?.payload?.data]
      };
    case EDIT_USER_DATA:{
      return{
        ...state,
        data:action.payload,
      }
    }
    case DELETE_USER_DATA:{
      console.log(action.payload);
      return {
        ...state,
        data:action.payload,
      }
    }
    default:
      return state;
    }
};
