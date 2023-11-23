import SummarizeItem from "../features/summarize/SummarizeItem";

export default function SummarizeList({ summarizeObj }) {
  console.log(
    "🚀 ~ file: SummarizeList.jsx:4 ~ SummarizeList ~ summarizeObj:",
    summarizeObj
  );
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-7 bg-[--primary-color] p-2 rounded-md text-white text-center">
        <div>ห้อง</div>
        <div>ผู้เช่า</div>
        <div>สถานะการจ่ายเงิน</div>
        <div>ค่าห้อง</div>
        <div>ค่าน้ำ</div>
        <div>ค่าไฟฟ้า</div>
        <div>ยอดรวม</div>
      </div>
      {summarizeObj.map((el, idx) => (
        <SummarizeItem
          key={idx}
          room={el?.roomName}
          user={el?.userName}
          statusPayment={el?.statusPayment}
          roomPrice={el?.priceRoom}
          water={el?.priceUnitWater}
          electric={el?.priceUnitElectric}
          total={el?.totalPrice}
        />
      ))}
    </div>
  );
}
