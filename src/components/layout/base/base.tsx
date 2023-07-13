import { Header, Navbar } from "..";
import * as React from "react";

interface IProps {
  children: React.ReactNode;
}

export const Base: React.FC<IProps> = ({ children }) => {
  return (
    <main>
      <Header />
      <Navbar />
      <main>{children}</main>
    </main>
  );
};
