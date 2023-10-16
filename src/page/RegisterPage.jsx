import RegisterContainer from "../features/auth/RegisterContainer";
import { useAuth } from "../hooks/use-auth";
import HeaderLogin from "../layout/HeaderLogin";

export default function RegisterPage() {
  const { setRegIsAdmin } = useAuth();
  return (
    <>
      <div>
        <HeaderLogin register="bg-gray-200 text-[--primary-color]  cursor-default" />
      </div>

      <div>
        <div className="flex">
          <div className=" w-1/2 overflow-hidden ">
            <img
              className="h-screen w-screen"
              src="https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
          <div className="w-1/2 bg-gray-200 flex justify-center items-center  ">
            <div className="flex flex-col gap-5">
              <div onClick={() => setRegIsAdmin(true)}>
                <RegisterContainer text="Owner" />
              </div>
              <div onClick={() => setRegIsAdmin(false)}>
                <RegisterContainer text="User" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
