import styles from "./loader.styles.module.css";
import Logo from "../../../asset/images/NavBar/seesLogo.png";

export const Loader = () => {
  return (
    <section className={styles.loaderContainer}>
      <img src={Logo} className={styles.logo} />
    </section>
  );
};
