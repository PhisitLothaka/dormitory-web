import SettingFormHaveUser from "./SettingFormHaveUser";
import SettingFormNoUser from "./SettingFormNoUser";

export default function SettingUserForm({ roomObj, setIsOpen }) {
  return (
    <div>
      {roomObj?.userRoom[0] ? (
        <SettingFormHaveUser roomObj={roomObj} setIsOpen={setIsOpen} />
      ) : (
        <SettingFormNoUser roomObj={roomObj} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
