import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex justify-between items-center">
      <div>{user.name}</div>
      <div class="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/carrer">Carrer</Link>
        <Link to="/about">About</Link>
      </div>
      <div class="login flex gap-2 items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral rounded-none">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
