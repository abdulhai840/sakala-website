import { useState } from "react";
import { useForm } from "react-hook-form";
import UserForm from "../../components/UserForm/UserForm";
import { UserResolver } from "../../validators/validator";

const defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
  role: ""
};
export default function AddUser(params) {
  const [modules, setModules] = useState([]);
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues, resolver: UserResolver });
  const onSubmit = (values) => {};
  return (
    <>
      <UserForm
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
