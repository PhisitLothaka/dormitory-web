export default function SummarizeItem({
  room,
  user,
  statusPayment,
  roomPrice,
  water,
  electric,
  total,
}) {
  return (
    <div className="grid grid-cols-7 bg-white p-2 rounded-md text-[--primary-color] text-center">
      <div>{room}</div>
      <div>{user}</div>
      <div>{statusPayment || "-"}</div>
      <div>{roomPrice}</div>
      <div>{water}</div>
      <div>{electric}</div>
      <div>{total}</div>
    </div>
  );
}
