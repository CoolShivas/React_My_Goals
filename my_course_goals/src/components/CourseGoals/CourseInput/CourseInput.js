import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isBlankValid, setIsBlankValid] = useState(true);


  const goalInputChangeHandler = event => {
    if (event.target.value.trim().length > 0) {
      setIsBlankValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsBlankValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isBlankValid ? "red" : "black" }}>Course Goal</label>
        <input
          style={{
            borderColor: !isBlankValid ? "red" : "black",
            background: !isBlankValid ? "powderblue" : "transparent"
          }}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit"
        styleABC={{
          backgroundColor: !isBlankValid ? "red" : "#ac0e77"
        }}
      >Add Goal</Button>

    </form >
  );
};

export default CourseInput;
