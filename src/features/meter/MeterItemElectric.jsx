import { useState } from "react";

export default function MeterItemElectric({
  name,
  unitOld,
  date,
  unitPrice,
  adminId,
  roomId,
}) {
  const [input, setInput] = useState({
    priceUnit: unitPrice,
    unit: "",
    createAt: date,
    roomId: roomId,
    adminId: adminId,
  });

  return (
    <div
      className="grid grid-cols-4 bg-white p-1  rounded-md text-[--primary-color] text-center
     mt-4"
    >
      <div>{name}</div>
      <div>{unitOld ? unitOld : "-"}</div>
      <div>
        <input
          type="text"
          value={input.unit}
          className="bg-gray-200 rounded-md p-0.5 text-center"
          onChange={(e) => {
            setInput({ ...input, [e.target.name]: e.target.value });
          }}
          name="unit"
        />
      </div>
      <div>
        {input.unit - unitOld < 0 || isNaN(input.unit - unitOld)
          ? "-"
          : input.unit - unitOld}
      </div>
    </div>
  );
}
