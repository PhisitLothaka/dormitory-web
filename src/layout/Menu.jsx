import ButtonMenuBar from "../components/buttonMenuBar";
import { Link } from "react-router-dom";
import { FaRegBuilding } from "react-icons/fa";
import { IoSpeedometer } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";

export default function Menu() {
  return (
    <div className="flex gap-3 py-3 px-4">
      <Link to="/">
        <ButtonMenuBar text="ผังห้องพัก">
          <FaRegBuilding className="w-[35px] h-[35px]" />
        </ButtonMenuBar>
      </Link>

      <Link to="meter">
        <ButtonMenuBar text="บันทึกมิเตอร์">
          <IoSpeedometer className="w-[35px] h-[35px]" />
        </ButtonMenuBar>
      </Link>
      <Link to="summarize">
        <ButtonMenuBar text="สรุปยอด">
          <TbReportSearch className="w-[35px] h-[35px]" />
        </ButtonMenuBar>
      </Link>
    </div>
  );
}
