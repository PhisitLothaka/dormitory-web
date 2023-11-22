import MeterItemElectric from "./MeterItemElectric";

export default function MeterElectricList({ allRoom, date }) {
  return (
    <>
      <div className="grid grid-cols-5 bg-[--primary-color] p-1 text-white rounded-md text-center mt-4">
        <div>ห้อง</div>
        <div>ก่อนหน้า</div>
        <div>ล่าสุด</div>
        <div>หน่วยที่ใช้</div>
      </div>

      {allRoom.map((el) => (
        <MeterItemElectric
          key={el.roomId}
          name={el?.name}
          unitOld={el?.unit}
          priceUnit={el?.priceUnit}
          date={date}
          roomId={el.roomId}
        />
      ))}
    </>
  );
}
