import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function UserDetail() {
  const { id } = useParams();
  const { usersList } = useSelector((state) => state.users);
  const user =
    usersList &&
    usersList.find((item) => {
      return item.login.uuid == id;
    });
  return (
    <div style={{ marginTop: "3rem" }}>
      {
        user !== undefined ?
        <>
          <img
            src={user.picture.large}
            alt=""
            width={"150px"}
            height={"150px"}
          />
          <h1>
            {user.name.title} {user.name.first} {user.name.last}
          </h1>
          <p>{user.email}</p>
          <p>
            {user.gender} - {user.phone}
          </p>
        </> :
        <p>go back to homepage to fetch data</p>
      }
    </div>
  );
}

export default UserDetail;
