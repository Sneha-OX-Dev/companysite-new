import type { ReactNode } from "react";
import HomeNavbar from "../../components/HomeNavbar";

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HomeNavbar />
      {children}
    </div>
  );
};

export default HomeLayout;
