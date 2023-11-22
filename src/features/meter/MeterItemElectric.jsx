import { useState } from "react";
import axios from "../../config/axios";
export default function MeterItemElectric({
  name,
  unitOld,
  date,
  unitPrice,
  roomId,
}) {
  const [input, setInput] = useState({
    priceUnit: unitPrice,
    unit: "",
    createAt: date,
    roomId: roomId,
    unitUsed: "",
  });

  let result = "";

  return (
    <div
      className="grid grid-cols-5 bg-white p-1  rounded-md text-[--primary-color] text-center
     mt-4"
    >
      <div>{name}</div>
      <div>{unitOld ? unitOld : "-"}</div>
      <div>
        <input
          type="text"
          className="bg-gray-200 rounded-md p-0.5 text-center"
          onChange={(e) => {
            setInput(() => ({ ...input, unit: e.target.value }));
          }}
          placeholder="-"
          value={input.unit}
        />
      </div>
      <div>
        {input.unit - unitOld < 0 || isNaN(input.unit - unitOld)
          ? "-"
          : (result = input.unit - unitOld)}
      </div>
      <div>
        <button
          className="bg-[--success-color] text-white w-fit px-2 rounded-md "
          onClick={async () => {
            try {
              if (result) {
                setInput(() => ({ ...input, unitUsed: result }));
              }

              await axios.post("/meter/electric", input);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          บันทึก
        </button>
      </div>
    </div>
  );
}
