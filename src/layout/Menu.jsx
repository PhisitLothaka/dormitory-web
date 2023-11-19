import ButtonMenuBar from "../components/buttonMenuBar";
import { BuildingIcon, MeterIcon, SummarizeIcon } from "../icons";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div className="flex gap-3 py-3 px-4">
      <Link to="/">
        <ButtonMenuBar text="ผังห้องพัก">
          <BuildingIcon color="--primary-color" />
        </ButtonMenuBar>
      </Link>

      <Link to="/meter">
        <ButtonMenuBar text="บันทึกมิเตอร์">
          <MeterIcon />
        </ButtonMenuBar>
      </Link>
      <Link to="/summarize">
        <ButtonMenuBar text="สรุปยอด">
          <SummarizeIcon />
        </ButtonMenuBar>
      </Link>
    </div>
  );
}
