import styles from "./level.module.css";
import Frame from "./Frame.svg";
import Logo from "./logo.png";
import { useState } from "react";

const Level = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div>
      <nav className={styles.navbar}>
        <img src={Logo} alt="Logo" />
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
