import { MDBDatatable } from "mdb-react-ui-kit";
import Sidebar from "../../components/Sidebar/Sidebar";
import profile from "../../assests/profile.png";
import { ReactComponent as FilterIcon } from "../../assests/filter.svg";
import { ReactComponent as EditIcon } from "../../assests/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assests/delete.svg";
import AddButton from "../../components/AddButton/AddButton";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function InventoryList(params) {
  const navigate = useNavigate();
  const [search, setSearch] = useState();
  const Actions = (id) => {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center">
          <EditIcon
            width={20}
            className="me-2 cursor"
            onClick={() => navigate("/editstock/1")}
          />
          <DeleteIcon width={30} className="cursor" />
        </div>
      </>
    );
  };
  const basicData = {
    columns: ["Profile", "Product ID", "Product Name", "Qty", "Status", "Action"],
    rows: [
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
      [
        <img src={profile} alt="" height={32} />,
        "515448",
        "N/A",
        "32",
        "#626262",
        <Actions />,
      ],
     
    ],
  };
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={61} />
        <div className="col-9 mx-auto mt-4">
          <div className="row align-items-center mx-0 px-0">
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <h6 className="black fw-bold mb-0">Inventory </h6>
              <small className="mb-0">Manage your inventory</small>
            </div>
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <div className="d-flex align-items-center flex-end justify-content-md-end">
                <AddButton
                  text={"Add Inventory"}
                  onClick={() => navigate("/addstock")}
                />
              </div>
            </div>
          </div>
          <div className="my-3 p-3 bg-white rounded">
          <div className="d-flex mb-4 align-items-center">
              <FilterIcon width={30} className="cursor me-3" />
              <input
                style={{
                  border: "1px solid #626262",
                  borderRadius: "20px",
                  padding: "0.2rem 0.5rem",
                  height: "2rem",
                }}
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"Search"}
              />
            </div>
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
