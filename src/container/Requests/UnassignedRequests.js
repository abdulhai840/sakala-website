import { MDBDatatable } from "mdb-react-ui-kit";
import Sidebar from "../../components/Sidebar/Sidebar";
import profile from "../../assests/profile.png";
import { ReactComponent as DeleteIcon } from "../../assests/delete.svg";
import AddButton from "../../components/AddButton/AddButton";
import { useNavigate } from "react-router-dom";

export default function UnassignedRequests(params) {
  const navigate = useNavigate();
  const Actions = (id) => {
    return (
      <>
        <DeleteIcon width={30} className="cursor" />
      </>
    );
  };
  const basicData = {
    columns: ["Profile", "First Name", "Last Name", "Date", "Time", "Action"],
    rows: [
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "Uzair",
        "Asghar",
        "15-12-2022",
        "21 : 25",
        <Actions />,
      ],
    ],
  };
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={42} />
        <div className="col-9 mx-auto mt-4">
          <div className="row align-items-center mx-0 px-0">
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <h6 className="black fw-bold mb-0">Requests </h6>
              <small className="mb-0">Manage your requests</small>
            </div>
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <div className="d-flex align-items-center flex-end justify-content-md-end">
                <AddButton
                  text={"Add New User"}
                  onClick={() => navigate("/adduser")}
                />
              </div>
            </div>
          </div>
          <div className="my-3 p-3 bg-white rounded">
            <MDBDatatable
              selectable
              pagination={false}
              sm
              multi
              fixedHeader
              maxHeight="560px"
              data={basicData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
