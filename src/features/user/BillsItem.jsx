import { useMeter } from "../../hooks/use-meter";

export default function BillsItem() {
  const { userBill } = useMeter();
  console.log("🚀 ~ file: BillsItem.jsx:5 ~ BillsItem ~ userBill:", userBill);
  return (
    <div className="flex flex-col gap-2 ">
      {userBill.map((el) => (
        <div
          className="grid grid-cols-6 bg-white p-2 rounded-md text-[--primary-color] text-center"
          key={el?.roomId}
        >
          <div>{el?.room?.name}</div>

          <div>
            {el.checkPayment ? (
              <div className="text-[--success-color]">ชำระแล้ว</div>
            ) : (
              <div className="text-[--alert-color]">ค้างชำระ</div>
            )}
          </div>
          <div>{el?.priceRoom}</div>
          <div>{el?.priceUnitWater}</div>
          <div>{el?.priceUnitElectric}</div>
          <div>{el?.totalPrice}</div>
        </div>
      ))}
    </div>
  );
}
