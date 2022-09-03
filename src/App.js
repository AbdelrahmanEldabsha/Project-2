import React, { useState, Fragment } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const userAddHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString },
      ];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={userAddHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
