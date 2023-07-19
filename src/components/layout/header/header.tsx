import { useState } from "react";
import styles from "./banner.module.css";
import Logo from "./logo.png";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="Logo" />
      <div className={styles.logo}>
        <a href="/">MY ELECTRICAL APP</a>
      </div>
      <div>
        <ul className={styles.menu}>
          <li style={{ paddingTop: "20px" }}>
            <a href="#Social">Social</a>
          </li>
          <li style={{ paddingTop: "20px" }}>
            <a href="#News">News</a>
          </li>
          <li style={{ paddingTop: "20px" }}>
            <a href="#Business">Business</a>
          </li>
          <li style={{ paddingTop: "10px" }}>
            <button title="Toggle Dropdown" className={styles.Courses}>
              <a href="#Courses">Courses</a>
            </button>
          </li>
        </ul>
      </div>

      <div className={styles.dropdown}>
        <button onClick={toggleDropdown} className={styles.dropdownToggle}>
          <span className={styles.dropdownIcon}></span>
        </button>
        {isDropdownOpen && (
          <ul className={styles.dropdownMenu}>
            <li>
              <a href="/Social">Social</a>
            </li>
            <li>
              <a href="/News">News</a>
            </li>
            <li>
              <a href="/Business">Business</a>
            </li>
            <li style={{ paddingTop: "10px" }}>
              <button className={styles.Courses}>
                <a href="#Courses">Courses</a>
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
