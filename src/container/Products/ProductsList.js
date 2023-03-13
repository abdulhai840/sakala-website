import { MDBDatatable } from "mdb-react-ui-kit";
import { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { ReactComponent as FilterIcon } from "../../assests/filter.svg";
import { ReactComponent as EditIcon } from "../../assests/edit.svg";
import { ReactComponent as DeleteIcon } from "../../assests/delete.svg";
import AddButton from "../../components/AddButton/AddButton";
import { useNavigate } from "react-router-dom";

export default function ProductsList(params) {
  // const [filter, setFilter] = useState(false);
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  const Actions = (id) => {
    return (
      <>
        <div className="d-flex justify-content-center align-items-center">
          <EditIcon
            width={20}
            className="me-2 cursor"
            onClick={() => navigate("/editproduct/1")}
          />
          <DeleteIcon width={30} className="cursor" />
        </div>
      </>
    );
  };
  const basicData = {
    columns: [
      "Product",
      "Brand",
      "Group",
      "Sub group",
      "Size",
      "Price",
      "Initail Stock",
      "Action",
    ],
    rows: [
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
      [
        "Shoes",
        "footwear",
        "Nike",
        "Classice Shoes",
        "51811",
        "Classice Shoes",
        "Classice Shoes",
        <Actions />,
      ],
    ],
  };
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={21} />
        <div className="col-9 mx-auto mt-4">
          <div className="row align-items-center mx-0 px-0">
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <h6 className="black fw-bold mb-0">Products </h6>
              <small className="mb-0">Manage your products</small>
            </div>
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <div className="d-flex align-items-center flex-end justify-content-md-end">
                <AddButton
                  text={"Add New Product"}
                  onClick={() => navigate("/addproduct")}
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
