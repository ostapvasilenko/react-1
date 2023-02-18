import React, { useState } from "react";
import styles from "../styles/Reactproject.module.css";

const Student = () => {
  let [counter, setCounter] = useState(0);
  let [surname, setSurname] = useState('');
  let [name, setName] = useState('');
  let [fathername, setFathername] = useState('');
  let [email, setEmail] = useState('');

  return (
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
            <form>
                <input onChange={(e) => {setSurname(e.target.value) }} type="text" placeholder="Surname"/>
                <input onChange={(e) => {setName(e.target.value) }} type="text" placeholder="Name"/>
                <input onChange={(e) => {setFathername(e.target.value) }} type="text" placeholder="Fathername"/>
                <input onChange={(e) => {setEmail(e.target.value) }} type="text" placeholder="Email"/>
                <input type="submit" value="Submit"/>
            </form>
            <h2>
                {surname}
            </h2>

            <h2>
                {name}
            </h2>

            <h2>
                {fathername}
            </h2>

            <h2>
                {email}
            </h2>
          </div>
        </div>
      </div>
  );
};

export default Student;

