export default function ButtonForm({ text, className }) {
  return (
    <button
      className={`${
        className
          ? className
          : "bg-[--primary-color] text-white hover:bg-gray-100 hover:text-[#5A6C80]"
      } px-3 py-1 rounded-md `}
      type="submit"
    >
      {text}
    </button>
  );
}
