export default function InputForm({
  text,
  type = "text",
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="flex gap-2 items-center ">
      <label htmlFor="">{text}</label>
      <input
        type={type}
        className="bg-gray-100 rounded-md p-2 border focus:outline-[--primary-color]"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
