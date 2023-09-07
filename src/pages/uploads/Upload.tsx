import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import styles from "./upload.module.css";

const Upload = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className={styles.uploadcontainer}>
      <div className={styles.uploadmaterials}>Upload Materials</div>
      <div className={styles.upload}>
        <a>Level</a>
        <a>
          <div className={styles.dropdown}>
            <button onClick={toggleDropdown} className={styles.dropdownToggle}>
              <a>
                <FaChevronDown />
              </a>
            </button>
            {isDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                <li>
                  <a href="/Social">Year 1</a>
                </li>
                <li>
                  <a href="/News">Year 2</a>
                </li>
                <li>
                  <a href="/Business">Year 3</a>
                </li>
                <li>
                  <a href="#Courses">Year 4</a>
                </li>
                <li>
                  <a href="#Courses">Year 5</a>
                </li>
              </ul>
            )}
          </div>
        </a>
      </div>
      <div className={styles.upload}>
        <a>First Semester</a>
        <a>
          <FaChevronDown />
        </a>
      </div>
      <div className={styles.upload}>
        <a>Select courses</a>
        <a>
          <FaChevronDown />
        </a>
      </div>
      <div className={styles.uploadbox}>Upload material</div>
      <div className={styles.uploaded}>
        <a>Upload material</a>
      </div>
      <div className={styles.uploaded1}>
        <a>Cancel upload</a>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
};
export default Upload;
