import { useMeter } from "../../hooks/use-meter";

export default function OrderItem({ month }) {
  const { summarizeInMonth, editStatusPaymant } = useMeter();
  console.log(
    "🚀 ~ file: OrderItem.jsx:7 ~ OrderItem ~ summarizeInMonth:",
    summarizeInMonth
  );

  return (
    <div className="flex flex-col gap-2">
      {summarizeInMonth.map((el, idx) => (
        <div
          className="grid grid-cols-8 bg-white p-2 rounded-md text-[--primary-color] text-center"
          key={idx}
        >
          <div>{el?.roomName}</div>
          <div>{el?.userName}</div>
          <div>
            {el?.checkPayment ? (
              <div className="text-[--success-color]">ชำระแล้ว</div>
            ) : (
              <div className="text-[--alert-color]">ค้างชำระ</div>
            )}
          </div>
          <div>{el?.priceRoom}</div>
          <div>{el?.priceWater}</div>
          <div>{el?.priceElectric}</div>
          <div>{el?.totalPrice}</div>
          <div>
            <input
              type="checkbox"
              onChange={(e) => {
                editStatusPaymant(e.target.checked, el?.id, month);
              }}
              checked={el?.checkPayment}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
