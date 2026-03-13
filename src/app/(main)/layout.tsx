import Footer from "@/components/Footer";
import HomeNavbar from "@/components/HomeNavbar";
import type { ReactNode } from "react";

const MainLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <div className="min-h-screen">
      <HomeNavbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
