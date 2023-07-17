import { Header, Navbar } from "..";
import * as React from "react";
import { Outlet } from "react-router-dom";
import styles from "./base.module.css";

interface IProps {
  children?: React.ReactNode;
}

export const Base: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className={styles.sideNav}>
        <Navbar />
      </div>
      <main className={styles.appContent}>
        {children}
        <Outlet />
      </main>
    </main>
  );
};
