import React, { useState } from "react";
import styles from "../styles/Reactproject.module.css";

const Student = () => {
  let [counter, setCounter] = useState(0);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.title}>Student Page</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
            <div
              className="btn btn-success"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Add +1
            </div>
            <h2>Result: {counter}</h2>
            <form action="">
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;

