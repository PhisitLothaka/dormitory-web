import { FaRegBuilding } from "react-icons/fa";
import ButtonForm from "../components/ButtonForm";
import { Link } from "react-router-dom";

export default function HeaderLogin({ login, register }) {
  return (
    <div className=" absolute bg-[--primary-color] w-screen z-50 text-white flex justify-between px-5">
      <div className="flex gap-4 p-3 items-center">
        <div>
          <FaRegBuilding />
        </div>
        <div className="cursor-default  ">dormitory</div>
      </div>

      <div className="flex gap-4 items-center px-3">
        <div>
          <Link to="/login">
            <ButtonForm text="Login" className={login} />
          </Link>
        </div>
        <div>
          <Link to="/register">
            <ButtonForm text="Register" className={register} />
          </Link>
        </div>
      </div>
    </div>
  );
}
