export default function ButtonMenuBar({ text, children }) {
  return (
    <div className=" block w-24 h-22 text-white rounded-md bg-[--primary-color] p-2 cursor-pointer hover:bg-gray-100 hover:text-[--primary-color]">
      <div className="flex flex-col justify-center items-center gap-2">
        {children}

        <div className="text-sm">{text}</div>
      </div>
    </div>
  );
}
