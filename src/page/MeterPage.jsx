import axios from "../config/axios";
import ButtonForm from "../components/ButtonForm";
import { useState, useEffect } from "react";
import MeterList from "../features/meter/MeterList";
import MeterElectricList from "../features/meter/MeterElectricList";

export default function MeterPage() {
  const [meterWater, setMeterWater] = useState([]);
  console.log(
    "🚀 ~ file: MeterPage.jsx:9 ~ MeterPage ~ meterWater:",
    meterWater
  );
  const [meterElectric, setMeterElectric] = useState([]);

  const [isClick, setIsClick] = useState(false);
  const [date, setDate] = useState("");

  useEffect(() => {
    if (isClick) {
      if (date) {
        axios.get(`/meter/electric/${date}`).then((res) => {
          setMeterElectric(res.data.roomAdmin);
        });
      }
    } else {
      if (date) {
        axios.get(`/meter/water/${date}`).then((res) => {
          setMeterWater(res.data.roomAdmin);
        });
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
        <div className="flex">
          <input
            type="date"
            onChange={async (e) => {
              setDate(() => e.target.value);
            }}
          />
        </div>
      </div>

      {isClick
        ? meterElectric && <MeterElectricList allRoom={meterElectric} />
        : meterWater && <MeterList allRoom={meterWater} />}
    </div>
  );
}
