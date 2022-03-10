import React, { useEffect, FC, useState } from "react";
import { user } from "../types";
const User: FC<{
  data: user;
  DeleteUser: (id: number) => void;
  UpdateUserData: (data: user, id: number) => void;
}> = ({ data, DeleteUser, UpdateUserData }) => {
  const [editable, setEditable] = useState<boolean>(false);
  const [newData, setNewData] = useState<user>();
  const ChangeData = (key: string, value: string) => {
    setNewData((prev: user) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };
  const HandleEditClick = () => {
    if (editable) {
      UpdateUserData(newData, data.id);

      setEditable(false);
    } else {
      setEditable(true);
    }
  };
  useEffect(() => {
    setNewData(data);
  }, []);

  return (
    <tr>
      <td>
        <img
          src={data.avatar}
          style={{
            borderRadius: "50%",
            height: "2rem",
            width: "2rem",
          }}
        ></img>
      </td>

      <td>
        {editable ? (
          <input
            type="text"
            value={newData.id}
            onChange={(e) => {
              ChangeData("id", e.target.value);
            }}
            style={{ width: "90%" }}
          ></input>
        ) : (
          data.id
        )}
      </td>

      <td>
        {" "}
        {editable ? (
          <input
            type="text"
            value={newData.email}
            onChange={(e) => {
              ChangeData("email", e.target.value);
            }}
            style={{ width: "90%" }}
          ></input>
        ) : (
          data.email
        )}
      </td>
      <td>
        {" "}
        {editable ? (
          <input
            type="text"
            value={newData.first_name}
            onChange={(e) => {
              ChangeData("first_name", e.target.value);
            }}
            style={{ width: "90%" }}
          ></input>
        ) : (
          data.first_name
        )}
      </td>
      <td>
        {" "}
        {editable ? (
          <input
            type="text"
            value={newData.last_name}
            onChange={(e) => {
              ChangeData("last_name", e.target.value);
            }}
            style={{ width: "90%" }}
          ></input>
        ) : (
          data.last_name
        )}
      </td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              HandleEditClick();
            }}
          >
            {editable ? "Save" : "Edit"}
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              DeleteUser(data.id);
            }}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};
export default User;
