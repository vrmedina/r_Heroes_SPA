import { Outlet } from "react-router-dom";

export const AuthRootPage = () => {
  return (
    <div className="container">
      <Outlet />
    </div>
  );
};
