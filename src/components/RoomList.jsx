import HeaderRoomList from "./headerRoomList";
import RoomItem from "../features/room/RoomItem";

export default function RoomList({ allRoom }) {
  return (
    <>
      <HeaderRoomList />

      {allRoom.map((el) => (
        <RoomItem
          userName={el?.userRoom[0]?.user?.firstName}
          mobile={el?.userRoom[0]?.user?.mobile}
          statusPayment={el?.userRoom[0]?.statusPayment}
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
