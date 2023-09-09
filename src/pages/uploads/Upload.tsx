import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import styles from "./upload.module.css";

const Upload = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSemesterDropdownOpen, setIsSemesterDropdownOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSemesterDropdown = () => {
    setIsSemesterDropdownOpen(!isSemesterDropdownOpen);
  };

  const toggleCoursesDropdown = () => {
    setIsCoursesDropdownOpen(!isCoursesDropdownOpen);
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
                {/* Add your level options here */}
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
          <div className={styles.dropdown}>
            <button
              onClick={toggleSemesterDropdown}
              className={styles.dropdownToggle}
            >
              <a>
                <FaChevronDown />
              </a>
            </button>
            {isSemesterDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {/* Add your first semester options here */}
                <li>
                  <a href="#">Option 1</a>
                </li>
                <li>
                  <a href="#">Option 2</a>
                </li>
                {/* Add more options as needed */}
              </ul>
            )}
          </div>
        </a>
      </div>
      <div className={styles.upload}>
        <a>Select courses</a>
        <a>
          <div className={styles.dropdown}>
            <button
              onClick={toggleCoursesDropdown}
              className={styles.dropdownToggle}
            >
              <a>
                <FaChevronDown />
              </a>
            </button>
            {isCoursesDropdownOpen && (
              <ul className={styles.dropdownMenu}>
                {/* Add your course selection options here */}
                <li>
                  <a href="#">Course 1</a>
                </li>
                <li>
                  <a href="#">Course 2</a>
                </li>
                {/* Add more course options as needed */}
              </ul>
            )}
          </div>
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
