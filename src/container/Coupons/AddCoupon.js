import { useState } from "react";
import { useForm } from "react-hook-form";
import CouponForm from "../../components/CouponForm/CouponForm";
import { CouponResolver } from "../../validators/validator";

const defaultValues = {
  item: "",
  qty: "",
  expDate: "",
  expQty: "",
  freeItem: "",
  price: "",
};
export default function AddCoupon(params) {
  const [modules, setModules] = useState([]);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues, resolver: CouponResolver });
  const onSubmit = (values) => {};
  const onSpendSubmit = () => {};
  return (
    <>
      <CouponForm
        mode={"ADD"}
        isEdit
        setModules={setModules}
        control={control}
        errors={errors}
        modules={modules}
        setValue={setValue}
        onSubmit={handleSubmit(onSubmit)}
        onSpendSubmit={onSpendSubmit}
      />
    </>
  );
}
