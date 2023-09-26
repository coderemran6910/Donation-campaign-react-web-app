import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import { createContext, useState, useEffect } from "react";
import Banner from "../components/Banner/Banner";

export const MyAllDataContext = createContext(null);
export const FilterdataContext = createContext(null);

const Layout = () => {
  const data = useLoaderData();
  const loc = useLocation();

  const [searchInput, setSearchInput] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const handleInput = (e) => {
    e.preventDefault();
    const newSearchInput = e.target.searchInput.value;
    setSearchInput(newSearchInput);
  };

  const handleSearchBtn = () => {
    const newFilteredData = data.filter((item) => {
      return item.category.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredData(newFilteredData);
  };

  useEffect(() => {
    const newFilteredData = data.filter((item) => {
      return item.category.toLowerCase().includes(searchInput.toLowerCase());
    });
    setFilteredData(newFilteredData);
  }, [searchInput, data]);

  return (
    <MyAllDataContext.Provider value={data}>
      <FilterdataContext.Provider value={filteredData}>
        <div>
          {loc.pathname === `/` ? (
            <Banner
              handleInput={handleInput}
              handleSearchBtn={handleSearchBtn} // Pass the function to Banner
            />
          ) : (
            <Header />
          )}
        </div>
        <Outlet />
      </FilterdataContext.Provider>
    </MyAllDataContext.Provider>
  );
};

export default Layout;
