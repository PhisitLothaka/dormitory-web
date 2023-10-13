import { BuildingIcon } from "../icons";
import { useAuth } from "../hooks/use-auth";
import ButtonForm from "../components/ButtonForm";

export default function Header() {
  const { logout } = useAuth();
  return (
    <div className=" bg-[--primary-color] w-screen z-50 text-white flex justify-between">
      <div className="flex gap-4 p-3 items-center">
        <div>
          <BuildingIcon />
        </div>
        <div>dormitory</div>
      </div>

      <div className="flex gap-1 items-center px-3">
        <div>
          <ButtonForm text="Home" type="button" />
        </div>
        <div>
          <ButtonForm text="News" type="button" />
        </div>
        <div onClick={logout}>
          <ButtonForm type="button" text="Log out" />
        </div>
      </div>
    </div>
  );
}
