import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div class="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/carrer">Carrer</Link>
        <Link to="/about">About</Link>
      </div>
      <div class="login flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
