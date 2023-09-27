import { useState } from "react";
import styles from "./banner.module.css";
import Logo from "./logo.png";
import { FaChevronDown } from "react-icons/fa";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className={styles.navbar}>
      <img src={Logo} alt="Logo" className={styles.logo_id} />
      <div className={styles.text_logo}>
        <a href="/">MY ELECTRICAL APP</a>
      </div>

      <div>
        <button className={styles.Courses}>
          <a href="#Courses">Courses</a>
        </button>
      </div>
    </nav>
  );
};
