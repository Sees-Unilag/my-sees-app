// import NavBg from '../../../images/NavBar/NavBg.png'
import styles from './navbar.module.css'
import Logo from '../../../asset/images/NavBar/seesLogo.png'
import Home from '../../../asset/images/NavBar/home.png'
import Level from '../../../asset/images/NavBar/level.png'
import Settings from '../../../asset/images/NavBar/setting.png'
import Uploads from '../../../asset/images/NavBar/upload.png'
import Notification from '../../../asset/images/NavBar/notification.png'

export const Navbar = () => {
  return (
    <aside className={`vw-100 aside ${styles.aside} position-fixed bottom-0 start-0 `}>
      <div className={`${styles.navContainer} h-100 w-100`}>
        {/* Logo Div */}
        <div className={`${styles.navLogoDiv} d-none d-lg-flex align-items-center justify-content-center`}>
          <img className={`${styles.navLogoImg}`} src={Logo}  alt='logo'/>
        </div>
        {/* NavMenuLists */}
        <ul className={`text-white d-flex align-items-center justify-content-between flex-lg-column ${styles.navUl}`}>
          <li className={`${styles.navLi} ${styles.navLiActive}`}>
            <span><img className={`${styles.navLiImg}`} src={Home} alt='' /></span>
            Home</li>
          <li className={`${styles.navLi}`}>
            <span><img className={`${styles.navLiImg}`} src={Level} alt='' /></span>
            OurLevels</li>
          <li className={`${styles.navLi}`}>
            <span><img className={`${styles.navLiImg}`} src={Notification} alt='' /></span>
            Notification</li>
          <li className={`${styles.navLi}`}>
            <span><img className={`${styles.navLiImg}`} src={Uploads} alt='' /></span>
            Uploads</li>
          <li className={`${styles.navLi}`}>
            <span><img className={`${styles.navLiImg}`} src={Settings} alt='' /></span>
            Settings</li>
        </ul>
      </div>

    </aside>
  );
};
