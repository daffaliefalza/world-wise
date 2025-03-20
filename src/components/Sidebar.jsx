import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
import Logo from "./Logo";
import Styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={Styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />

      <footer className={Styles.footer}>
        <p className={Styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} By WorldWise Inc.
        </p>
      </footer>
    </div>
  );
};
export default Sidebar;
