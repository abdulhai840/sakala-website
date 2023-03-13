import { ReactComponent as Search } from "../../assests/search.svg";
import { ReactComponent as Notification } from "../../assests/notification.svg";
import { ReactComponent as Admin } from "../../assests/admin.svg";
export default function AdminTopBar(params) {
  return (
    <>
      <div className="col-12 bg-white">
        <div className="d-flex justify-content-end align-items-center">
          <Search className="mx-2 mt-2" width={20} />
          <Notification className="mx-2" width={40} />
          <Admin className="mx-2 mt-2" width={30} />
        </div>
      </div>
    </>
  );
}
