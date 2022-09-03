import React, { useState, Fragment ,useRef} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const nameInputRef=useRef();
    const ageInputRef=useRef();

//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName=nameInputRef.current.value;
    const enteredAge=ageInputRef.current.value;

    // console.log(nameInputRef.current.value) // We can read an entered value through refs
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (Non-Empty values).",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value="";
    ageInputRef.current.value="";
    // setEnteredUsername("");
    // setEnteredAge("");
  };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };
//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClick={errorHandler}
        ></ErrorModal>
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username"> Username</label>
          <input
            id="username"
            type="text"
           
            ref={nameInputRef}
            
          ></input>
          <label htmlFor="age"> Age(Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          ></input>
          <Button type="submit"> AddUser</Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default AddUser;
