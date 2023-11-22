import MeterItemWater from "./MeterItemWater";

export default function MeterList({ allRoom, unitPrice, date }) {
  return (
    <>
      <div className="grid grid-cols-5 bg-[--primary-color] p-1 text-white rounded-md text-center mt-4">
        <div>ห้อง</div>
        <div>ก่อนหน้า</div>
        <div>ล่าสุด</div>
        <div>หน่วยที่ใช้</div>
      </div>

      {allRoom.map((el) => (
        <MeterItemWater
          key={el.id}
          name={el?.room?.name}
          unitOld={el?.room?.MeterWater[0]?.unit}
          unitPrice={unitPrice}
          date={date}
          roomId={el?.id}
        />
      ))}
    </>
  );
}
