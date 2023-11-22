import ButtonForm from "../components/ButtonForm";
import { useState, useEffect } from "react";
import MeterList from "../features/meter/MeterList";
import MeterElectricList from "../features/meter/MeterElectricList";
import { useMeter } from "../hooks/use-meter";

export default function MeterPage() {
  const [isClick, setIsClick] = useState(false);
  const [date, setDate] = useState("");

  const { getMeterWater, getMeterElectric, meter } = useMeter();
  // console.log("🚀 ~ file: MeterPage.jsx:15 ~ MeterPage ~ meterWater:", meter);

  useEffect(() => {
    if (isClick) {
      if (date) {
        getMeterElectric(date);
      }
    } else {
      if (date) {
        getMeterWater(date);
      }
    }
  }, [date]);

  return (
    <div className="px-4">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <ButtonForm
            text="มิเตอร์น้ำ"
            className={
              isClick
                ? ""
                : `cursor-default text-[--primary-color] ring ring-[--primary-color]`
            }
            onClick={() => setIsClick(false)}
          />
          <ButtonForm
            text="มิเตอร์ไฟฟ้า"
            className={
              isClick
                ? `cursor-default text-[--primary-color] ring ring-[--primary-color]`
                : ""
            }
            onClick={() => {
              setIsClick(true);
            }}
          />
        </div>
        <div className="flex ">
          <input
            type="date"
            onChange={async (e) => {
              setDate(() => e.target.value);
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-white text-[--primary-color] p-2 rounded-md">
            หน่วยละ
            <input
              className="bg-gray-100 rounded-md w-10 text-center bg-gray-200 mx-1 "
              value={meter[0]?.priceUnit}
            />
            บาท
          </div>
        </div>
      </div>

      {isClick
        ? meter && <MeterElectricList allRoom={meter} date={date} />
        : meter && <MeterList allRoom={meter} date={date} />}
    </div>
  );
}
