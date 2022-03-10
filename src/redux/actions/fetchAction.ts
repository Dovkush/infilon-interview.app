import {GET_USER_DATA} from "./actions";
import axios from "axios";
import { Dispatch } from "react";
export const fetchUser = (page:number=1) => {
  return (dispatch:Dispatch<any>) => {
    axios
      .get(`https://reqres.in/api/users?page=${page}`)
      .then((res) => {
        dispatch({ type: GET_USER_DATA, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};