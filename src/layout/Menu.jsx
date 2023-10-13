import ButtonMenuBar from "../components/buttonMenuBar";
import { BuildingIcon, MeterIcon, SummarizeIcon } from "../icons";

export default function Menu() {
  return (
    <div className="flex gap-3 py-3 px-4">
      <ButtonMenuBar text="ผังห้องพัก">
        <BuildingIcon color="--primary-color" />
      </ButtonMenuBar>
      <ButtonMenuBar text="บันทึกมิเตอร์">
        <MeterIcon />
      </ButtonMenuBar>
      <ButtonMenuBar text="สรุปยอด">
        <SummarizeIcon />
      </ButtonMenuBar>
    </div>
  );
}
