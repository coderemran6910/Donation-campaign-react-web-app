import { NavLink } from "react-router-dom";
import logo from "../../assets/Resources/Logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent my-2 flex flex-col md:flex-row  items-center relative z-40">
        <div className="md:flex-1 mb-5">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1 flex text-black gap-6 md:gap-12 md:text-xl font-bold">
            <NavLink to={"/"}>Home</NavLink>{" "}
            <NavLink to={"/donation"}>Donation</NavLink>{" "}
            <NavLink to={"/statistics"}>Statistics</NavLink>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
