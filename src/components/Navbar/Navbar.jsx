import { NavLink } from "react-router-dom";
import logo from "../../assets/Resources/Logo.png";
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-transparent my-2 flex items-center relative z-40">
        <div className="flex-1 ">
          <img src={logo} alt="" />
        </div>
        <div className="flex-none">
          <div className="menu menu-horizontal px-1 flex text-black gap-12 text-xl font-bold ">
            <NavLink to={"/"}>Home</NavLink>{" "}
            <NavLink to={"/donation"}>Donation</NavLink>{" "}
            <NavLink to={"/statasrics"}>Statastics</NavLink>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
