import { useState } from "react";
import { useForm } from "react-hook-form";
import ProductForm from "../../components/ProductForm/ProductForm";
import { ProductResolver } from "../../validators/validator";

const defaultValues = {
  itemName: "",
  price: "",
  group: "",
  initialStock: "",
  subGroup: "",
  productDetails: "",
  brand: "",
  size: "",
};
export default function AddProduct(params) {
  const [modules, setModules] = useState([]);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues, resolver: ProductResolver });
  const onSubmit = (values) => {};
  return (
    <>
      <ProductForm
        mode={"ADD"}
        isEdit
        setModules={setModules}
        control={control}
        errors={errors}
        modules={modules}
        setValue={setValue}
        onSubmit={handleSubmit(onSubmit)}
      />
    </>
  );
}
