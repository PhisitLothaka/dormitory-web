export default function ButtonForm({ text }) {
  return (
    <button
      className="bg-[#5A6C80] text-white px-3 py-1 rounded-md hover:bg-gray-300 hover:text-[#5A6C80]"
      type="submit"
    >
      {text}
    </button>
  );
}
