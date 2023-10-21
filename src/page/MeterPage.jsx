import axios from "../config/axios";
import ButtonForm from "../components/ButtonForm";
import { useState, useEffect } from "react";
import MeterList from "../features/meter/MeterList";
import MeterElectricList from "../features/meter/MeterElectricList";

export default function MeterPage() {
  const [meterWater, setMeterWater] = useState([]);
  const [meterElectric, setMeterElectric] = useState([]);
  const [isClick, setIsClick] = useState(false);
  const [date, setDate] = useState("");
  const [inputForm, setInputForm] = useState([]);
  console.log(
    "🚀 ~ file: MeterPage.jsx:13 ~ MeterPage ~ inputForm:",
    inputForm
  );

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

  console.log(meterWater);
  const unitPriceWater = meterWater[0]?.room?.MeterWater[0]?.priceUnit;
  const unitPriceElectric = meterElectric[0]?.room?.MeterElectric[0]?.priceUnit;
  const unitPrice = isClick ? unitPriceElectric : unitPriceWater;

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
            {
              <input
                disabled
                className="bg-gray-100 rounded-md w-10 text-center  "
                placeholder={unitPrice || "-"}
              />
            }
            บาท
          </div>
          <ButtonForm text="แก้ไข" />
        </div>
      </div>
      <form>
        {isClick
          ? meterElectric && (
              <MeterElectricList
                allRoom={meterElectric}
                date={date}
                unitPrice={unitPrice}
                setInputForm={setInputForm}
              />
            )
          : meterWater && <MeterList allRoom={meterWater} />}
        <div className="flex justify-end p-2 ">
          {(meterElectric.length || meterWater.length || "") && (
            <button className="bg-[--success-color] text-white px-3 py-1.5 rounded-md ">
              บันทึก
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
