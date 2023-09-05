import { FaChevronDown } from "react-icons/fa";
import styles from "./upload.module.css";

const Upload = () => {
  return (
    <div className={styles.uploadcontainer}>
      <div className={styles.uploadmaterials}>Upload Materials</div>
      <div className={styles.upload}>
        <a>Level</a>
        <a>
          <FaChevronDown />
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
