import { useEffect, useState } from "react";
import axios from "../config/axios";
import RoomList from "../components/RoomList";
import CreateRoomContainer from "../features/room/CreateRoomContainer";

export default function HomePage() {
  const [allRoom, setAllRoom] = useState([]);
  const [whereFloor, setWhereFloor] = useState(1);

  const isFloor = allRoom.filter((el) => el.floor === +whereFloor);

  const handleClick = (e) => {
    setWhereFloor(e.target.innerText);
  };

  useEffect(() => {
    axios
      .get("/room")
      .then((res) => {
        setAllRoom(res.data.rooms);
      })
      .catch((err) => {
        console.log("🚀 ~ file: HomePage.jsx:11 ~ axios.get ~ err:", err);
      });
  }, [allRoom]);

  return (
    <>
      <div className="flex flex-col gap-3">
        <CreateRoomContainer />

        <div className="px-4 flex flex-col gap-2">
          <RoomList allRoom={isFloor} />
        </div>
      </div>

      <div className="flex justify-center items-center mt-8">
        <div className="px-4 flex gap-2">
          <button
            onClick={handleClick}
            className="p-2  rounded-md bg-[--primary-color] first-letter:text-white"
          >
            1
          </button>
          <button
            onClick={handleClick}
            className="p-2 bg-[--primary-color] text-white rounded-md"
          >
            2
          </button>
        </div>
      </div>
    </>
  );
}
