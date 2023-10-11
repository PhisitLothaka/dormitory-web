import { BuildingIcon } from "../icons";

export default function HeaderLogin() {
  return (
    <div className=" absolute bg-[--primary-color] w-screen z-50 text-white flex justify-between">
      <div className="flex gap-4 p-3 items-center">
        <div>
          <BuildingIcon />
        </div>
        <div>dormitory</div>
      </div>

      <div className="flex gap-4 items-center px-3">
        <div>Login</div>
        <div>Register</div>
      </div>
    </div>
  );
}
