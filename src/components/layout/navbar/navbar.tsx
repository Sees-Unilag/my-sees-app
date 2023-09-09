// import NavBg from '../../../images/NavBar/NavBg.png'
import styles from "./navbar.module.css";
import Logo from "../../../asset/images/NavBar/seesLogo.png";
import Data from "./navbarData";
import NavBarLink from "./NavBarLink";

export const Navbar = () => {
  const navlinks = Data.map((each, idx) => {
    return (
      <NavBarLink
        name={each.name}
        img={each.img}
        routeName={each.routeName}
        key={idx}
      />
    );
  });
  return (
    <aside
      className={` aside ${styles.aside} position-fixed bottom-0 start-0 `}
    >
      <div className={`${styles.navContainer} h-100 w-100`}>
        {/* Logo Div */}
        <div
          className={`${styles.navLogoDiv} d-none d-lg-flex align-items-center justify-content-center`}
        >
          <img className={`${styles.navLogoImg}`} src={Logo} alt="logo" />
        </div>
        {/* NavMenuLists */}
        <ul
          className={`text-white d-flex align-items-center justify-content-between flex-lg-column ${styles.navUl}`}
        >
          {navlinks}
        </ul> 
      </div>
    </aside>
  ); 
};
