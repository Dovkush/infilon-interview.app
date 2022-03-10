import React, { useEffect, FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_USER_DATA, EDIT_USER_DATA } from "../redux/actions/actions";
import { fetchUser } from "../redux/actions/fetchAction";
import { user } from "../types";
import User from "./User";
type usersData = {
  page?: number;
  per_page?: number;
  total?: number;
  total_pages?: number;
  data?: [
    {
      id: number;
      email: string;
      first_name: string;
      last_name: string;
      avatar: string;
    }[]
  ];
  url?: string;
  text?: string;
};
const Users: FC = () => {
  const data: usersData = useSelector((state: any) => state?.userData);
  const dispatch = useDispatch();
  console.log(data.data[0]);
  const DeleteUser = (id: number) => {
    console.log(
      data?.data[0].filter((item) => {
        return item.id !== id;
      })
    );
    dispatch({
      type: DELETE_USER_DATA,
      payload: [
        data?.data[0].filter((item) => {
          return item.id !== id;
        }),
      ],
    });
  };
  const UpdateUserData = (newData: user, id: number) => {
    dispatch({
      type: EDIT_USER_DATA,
      payload: [
        data?.data[0]?.map((item) => {
          return item.id !== id ? item : newData;
        }),
      ],
    });
  };
  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("persist:Users"))) {
      dispatch(fetchUser());
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-14">
          {" "}
          <table className="table" width={"100%"}>
            <thead>
              <tr>
                <th scope="col">Profile</th>

                <th scope="col">Id</th>
                <th scope="col">Email</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
              </tr>
            </thead>
            <tbody>
              {data.data[0] &&
                data?.data[0]?.map((item, idx) => {
                  console.log(item);
                  return (
                    <User
                      key={item.id}
                      data={item}
                      DeleteUser={DeleteUser}
                      UpdateUserData={UpdateUserData}
                    />
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Users;
