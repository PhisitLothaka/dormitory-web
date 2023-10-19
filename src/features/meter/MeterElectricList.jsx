import MeterItemElectric from "./MeterItemElectric";

export default function MeterElectricList({ allRoom }) {
  return (
    <>
      <div className="grid grid-cols-4 bg-[--primary-color] p-1 text-white rounded-md text-center mt-4">
        <div>ห้อง</div>
        <div>ก่อนหน้า</div>
        <div>ล่าสุด</div>
        <div>หน่วยที่ใช้</div>
      </div>

      {allRoom.map((el) => (
        <MeterItemElectric
          key={el.id}
          name={el?.room?.name}
          unitOld={el?.room?.MeterElectric[0]?.unit}
        />
      ))}
    </>
  );
}
