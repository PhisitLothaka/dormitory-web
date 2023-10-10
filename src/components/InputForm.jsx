export default function InputForm({ title, type = "text" }) {
  return (
    <div className="flex gap-2">
      <label htmlFor="">{title}</label>
      <input type={type} className="bg-[#E5E7EB] rounded-sm" />
    </div>
  );
}
