import { Outlet } from "react-router-dom";
import { Navbar } from "../../ui";

export const HeroesRootPage = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
