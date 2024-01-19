import { useEffect } from "react";
import OrderItem from "../features/summarize/OrderItem";
import { useMeter } from "../hooks/use-meter";
import { useState } from "react";

export default function Order() {
  const monthObj = [
    "",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const { getMonthOrder, monthOrder } = useMeter();
  console.log("🚀 ~ Order ~ monthOrder:", monthOrder);
  const [month, setMonth] = useState(0);
  console.log("🚀 ~ file: Order.jsx:24 ~ Order ~ month:", month);
  const { getSummarizeInMonth, setSummarizeInMonth } = useMeter();

  useEffect(() => {
    getMonthOrder();
  }, []);
  useEffect(() => {
    if (month == 0) {
      setSummarizeInMonth([]);
    } else {
      getSummarizeInMonth(month);
    }
  }, [month]);
  return (
    <div className=" flex flex-col gap-3 px-4">
      <div>
        <select
          name="order"
          onChange={(e) => {
            setMonth(() => e.target.value);
          }}
        >
          <option value="0">โปรดเลือก</option>
          {monthOrder.map((month) => (
            <option value={month.month} key={month.month}>
              {monthObj[month.month]}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-8 bg-[--primary-color] p-2 rounded-md text-white text-center">
          <div>ห้อง</div>
          <div>ผู้เช่า</div>
          <div>สถานะการจ่ายเงิน</div>
          <div>ค่าห้อง</div>
          <div>ค่าน้ำ</div>
          <div>ค่าไฟฟ้า</div>
          <div>ยอดรวม</div>
          <div>ตรวจสอบการจ่ายเงิน</div>
        </div>
        <div>
          <OrderItem month={month} />
        </div>
      </div>
    </div>
  );
}
