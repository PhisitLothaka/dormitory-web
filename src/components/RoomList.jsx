import RoomItem from "../features/room/RoomItem";

export default function RoomList({ allRoom }) {
  return (
    <>
      <div className="grid grid-cols-7 bg-[--primary-color] text-white p-2 text-center rounded-md">
        <div>ห้อง</div>
        <div>ผู้เช่า</div>
        <div>เบอร์โทรศัพท์</div>
        <div>ราคาห้อง</div>
        <div>สถานะการชำระ</div>
        <div>สถานะห้อง</div>
        <div></div>
      </div>

      {allRoom.map((el) => (
        <RoomItem
          roomObj={el}
          key={el.id}
          name={el.name}
          price={el.price}
          statusRoom={el.statusRoom}
        />
      ))}
    </>
  );
}
