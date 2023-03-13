import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export const ProductResolver = yupResolver(
  Yup.object().shape({
    itemName: Yup.string().required("Item Name is required"),
    price: Yup.string().required("Price is required"),
    group: Yup.string().required("Group is required"),
    initialStock: Yup.string().required("Initial Stock is required"),
    subGroup: Yup.string().required("Subgroup is required"),
    productDetails: Yup.string().required("Product Details is required"),
    brand: Yup.string().required("Brand is required"),
    size: Yup.string().required("Size is required"),
  })
);
export const UserResolver = yupResolver(
  Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phone: Yup.string().required("Phone is required"),
    role: Yup.string().required("Role is required"),
  })
);
export const CouponResolver = yupResolver(
  Yup.object().shape({
    item: Yup.string().required("Item is required"),
    qty: Yup.string().required("Quantity is required"),
    expDate: Yup.string().required("Expiry Date is required"),
    expQty: Yup.string().required("Expiring Qty is required"),
    freeItem: Yup.string().required("Free Item is required"),
    price: Yup.string().required("Price is required"),
  })
);
