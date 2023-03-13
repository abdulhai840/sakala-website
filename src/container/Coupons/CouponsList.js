import { MDBDatatable } from "mdb-react-ui-kit";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddButton from "../../components/AddButton/AddButton";
import { useNavigate } from "react-router-dom";

export default function CouponsList(params) {
  const navigate = useNavigate();
  const basicData = {
    columns: [
      "Item",
      "Buying Qty",
      "Free Qty",
      "Exp Date",
      "Price",
      "Dis Price",
      "Status",
    ],
    rows: [
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
      ["Item", "3", "2", "15-12-2022", "$ 50", "$30", "Verified"],
    ],
  };
  return (
    <>
      <div className="d-flex" style={{ background: "#F5F6F9", height:"100vh" }}>
        <Sidebar type={51} />
        <div className="col-9 mx-auto mt-4">
          <div className="row align-items-center mx-0 px-0">
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <h6 className="black fw-bold mb-0">Coupons </h6>
              <small className="mb-0">Manage your coupons</small>
            </div>
            <div className="col-md-6 col-12 mx-auto px-0 my-2">
              <div className="d-flex align-items-center flex-end justify-content-md-end">
                <AddButton
                  text={"Add New Coupon"}
                  onClick={() => navigate("/addcoupon")}
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
