import styles from "./level.module.css";
import Frame from "./Frame.svg";
import Logo from "./logo.png";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCourses } from "../../api";

const Level = () => {
  // const { isLoading, data, error } = useQuery(["courses"], getAllCourses);

  // if (isLoading) return <>Loading...</>;

  // if (error) console.error(error);

  // if (data) console.log(data);

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <a href="/">OUR LEVELS</a>
        </div>
      </nav>
      <div className={styles.menu}>
        <div className={styles.year}>
          <div>
            {" "}
            <img src={Frame} alt="Frame" />
          </div>
          <div>Year 1</div>
        </div>
        <div className={styles.year}>
          {" "}
          <div>
            {" "}
            <img src={Frame} alt="Frame" />
          </div>
          <div>Year 2</div>
        </div>
        <div className={styles.year}>
          {" "}
          <div>
            {" "}
            <img src={Frame} alt="Frame" />
          </div>
          <div>Year 3</div>
        </div>
        <div className={styles.year}>
          {" "}
          <div>
            {" "}
            <img src={Frame} alt="Frame" />
          </div>
          <div>Year 4</div>
        </div>
        <div className={styles.year}>
          {" "}
          <div>
            {" "}
            <img src={Frame} alt="Frame" />
          </div>
          <div>Year 5</div>
        </div>
      </div>
    </div>
  );
};

export default Level;
