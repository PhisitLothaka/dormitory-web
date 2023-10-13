export default function ButtonForm({
  text,
  className,
  onClick,
  type = "submit",
}) {
  return (
    <button
      className={`${
        className
          ? className
          : "bg-[--primary-color] text-white hover:bg-gray-200 hover:text-[#5A6C80]"
      } px-3 py-1 rounded-md `}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
