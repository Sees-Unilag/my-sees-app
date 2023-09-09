import styles from "./home.module.css";
import ITDefense from "../../asset/images/IT-defense.png";

const Home = () => {
  return (
    <section className="">
      <section className="row">
        <div className="col-lg-6">
          <div className={styles.trendingCard}>
            <img src={ITDefense} className="img-fluid" alt="IT Defense" />
          </div>
        </div>
        <div className="col-lg-6"></div>
      </section>
      <section className="row">
        <div className="col-lg-6">
          <div className={styles.trendingCard}>
            <img src={ITDefense} className="img-fluid" alt="IT Defense" />
          </div>
        </div>
        <div className="col-lg-6"></div>
      </section>
    </section>
  );
};

export default Home;
