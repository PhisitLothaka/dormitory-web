import FormLogin from "../components/FormLogin";

export default function LoginPage() {
  return (
    <div className="flex">
      <div className=" w-1/2">
        <img
          className="h-screen w-screen "
          src="https://images.pexels.com/photos/3663530/pexels-photo-3663530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />
      </div>
      <div className="w-1/2 bg-[#F3F4F6]">
        <FormLogin />
      </div>
    </div>
  );
}
