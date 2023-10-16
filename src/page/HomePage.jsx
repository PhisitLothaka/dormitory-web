import { useEffect, useState } from "react";
import axios from "../config/axios";
import RoomList from "../components/RoomList";
import CreateRoomContainer from "../features/room/CreateRoomContainer";

export default function HomePage() {
  const [allRoom, setAllRoom] = useState([]);
  useEffect(() => {
    axios
      .get("/room")
      .then((res) => {
        setAllRoom(res.data.rooms);
      })
      .catch((err) => {
        console.log("🚀 ~ file: HomePage.jsx:11 ~ axios.get ~ err:", err);
      });
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <CreateRoomContainer />
      <div className="px-4 flex flex-col gap-2">
        <RoomList allRoom={allRoom} />
      </div>
    </div>
  );
}
