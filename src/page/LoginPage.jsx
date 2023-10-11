import FormLogin from "../components/FormLogin";
import HeaderLogin from "../layout/HeaderLogin";

export default function LoginPage() {
  return (
    <>
      <div>
        <HeaderLogin />
      </div>

      <div className="flex">
        <div className=" w-1/2 overflow-hidden ">
          <img
            className="h-screen w-screen"
            src="https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
        <div className="w-1/2 bg-gray-200">
          <FormLogin />
        </div>
      </div>
    </>
  );
}
