import InputForm from "./InputForm";

export default function FormLogin() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-3 shadow-lg flex flex-col gap-3 items-center">
        <div className="font-bold text-lg">Login</div>
        <InputForm title="Username" />
        <InputForm title="Password" type="password" />
      </div>
    </div>
  );
}
