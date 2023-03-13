import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AddCoupon from "../container/Coupons/AddCoupon";
import CouponsList from "../container/Coupons/CouponsList";
import Dashboard from "../container/Dashboard/Dashboard";
import AddStock from "../container/Inventory/AddStock";
import InventoryList from "../container/Inventory/InventoryList";
import AddProduct from "../container/Products/AddProduct";
import EditProduct from "../container/Products/EditProduct";
import ProductsList from "../container/Products/ProductsList";
import AssignedRequests from "../container/Requests/AssignedRequests";
import ClosedRequests from "../container/Requests/ClosedRequests";
import UnassignedRequests from "../container/Requests/UnassignedRequests";
import AddUser from "../container/Users/AddUser";
import UsersList from "../container/Users/UsersList";

export default function ProtectedRoutes(params) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/editproduct/:id" element={<EditProduct />} />
          <Route path="/users" element={<UsersList />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/assignedrequests" element={<AssignedRequests />} />
          <Route path="/unassignedrequests" element={<UnassignedRequests />} />
          <Route path="/closedrequests" element={<ClosedRequests />} />
          <Route path="/coupons" element={<CouponsList />} />
          <Route path="/addcoupon" element={<AddCoupon />} />
          <Route path="/inventory" element={<InventoryList />} />
          <Route path="/addstock" element={<AddStock />} />
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
