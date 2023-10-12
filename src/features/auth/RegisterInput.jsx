export default function RegisterInput({
  type = "text",
  placeholder,
  id,
  value,
  onChange,
  name,
  hasError,
}) {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`bg-gray-100 rounded-md px-3 py-1.5 w-full ${
        hasError
          ? "border-red-500 focus:ring-red-300"
          : "focus:border-[--primary-color]"
      }`}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}
