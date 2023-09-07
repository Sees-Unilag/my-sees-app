import styles from "./notification.module.css";
import notificationImage from "./notification.png";
const Notification = () => {
  return (
    <div className={styles.uploadcontainer}>
      <div className={styles.uploadmaterials}>Notifications</div>
      <div>
        <img src={notificationImage} alt="notification image"></img>
      </div>
    </div>
  );
};
export default Notification;
