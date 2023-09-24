import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "../components/Header";
import { createContext } from "react";
import Banner from "../components/Banner";

export const MyAllDataContext = createContext(null);
const Layout = () => {
  const data = useLoaderData();
  const loc = useLocation();
 

  return (
    <MyAllDataContext.Provider value={data}>
      <div>
        {loc.pathname === `/` ? <Banner /> : <Header />}
      </div>
      <Outlet />
    </MyAllDataContext.Provider>
  );
};

export default Layout;
