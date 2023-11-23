import { useEffect } from "react";
import BillsItem from "../features/user/BillsItem";
import { useAuth } from "../hooks/use-auth";
import { useMeter } from "../hooks/use-meter";

export default function UserPage() {
  const { authUser } = useAuth();
  const { getBillUser } = useMeter();
  useEffect(() => {
    getBillUser();
  }, []);
  return (
    <div className="py-5 px-4">
      <div className="grid grid-cols-2 w-80 gap-2 py-2">
        <div>ชื่อ</div>
        <div>
          {authUser?.firstName} {authUser?.lastName}
        </div>
        <div>email</div>
        <div>{authUser?.email}</div>
        <div>เลขบัตรประชาชน</div>
        <div>{authUser?.idCard}</div>
      </div>

      <div className="flex flex-col gap-2 ">
        <div className="grid grid-cols-6 bg-[--primary-color] p-2 rounded-md text-white text-center">
          <div>ห้อง</div>
          <div>สถานะการจ่ายเงิน</div>
          <div>ค่าห้อง</div>
          <div>ค่าน้ำ</div>
          <div>ค่าไฟฟ้า</div>
          <div>ยอดรวม</div>
        </div>
        <BillsItem />
      </div>
    </div>
  );
}
