import SettingFormHaveUser from "./SettingFormHaveUser";
import SettingFormNoUser from "./SettingFormNoUser";

export default function SettingUserForm({ roomObj }) {
  return (
    <div>
      {roomObj?.userRoom[0] ? (
        <SettingFormHaveUser roomObj={roomObj} />
      ) : (
        <SettingFormNoUser roomObj={roomObj} />
      )}
    </div>
  );
}
