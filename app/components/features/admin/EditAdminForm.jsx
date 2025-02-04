"use client";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";

import { useEffect, useState } from "react";
import {
  useAdmin,
  useUpdateAdmin,
  useUpdatePassword,
} from "../../admin/userManagement/parts/useUser";
import Select from "react-select";
import Spinner from "../../ui/Spinner";

const options = [
  { value: "admin", label: "Admin" },
  { value: "customers", label: "customers" },
  { value: "products", label: "products" },
  { value: "collections", label: "collections" },
  { value: "orders", label: "orders" },
  { value: "discounts", label: "discounts" },
  { value: "varients", label: "varients" },
  { value: "blogs", label: "blogs" },
  { value: "carts", label: "carts" },
  { value: "reviews", label: "reviews" },
  { value: "blogs", label: "Blogs" },
  { value: "comments", label: "comments" },
  { value: "hampers", label: "hampers" },
];

function EditAdminForm({ id }) {
  const { data, isPending: isWorking } = useAdmin();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { updateAdmin, isUpdating } = useUpdateAdmin();
  const { updatePassword, isUpdating: isUpdatingPassword } =
    useUpdatePassword();
  const [adminData, setAdminData] = useState({});
  const [password, setPassword] = useState("");
  const [defaultOptions, setDefaultOptions] = useState([]);

  useEffect(() => {
    const filteredData = data?.filter((el) => el._id === id);
    if (filteredData) {
      setAdminData(filteredData[0]);
    }
  }, [isWorking]);

  useEffect(() => {
    const newOptions = [];
    for (let i = 0; i < options.length; i++) {
      if (adminData?.menu?.includes(options[i].value)) {
        console.log("dfs");
        newOptions.push(options[i]);
      }
    }
    setDefaultOptions(newOptions);
  }, [adminData]);

  console.log(defaultOptions);
  const { errors } = formState;

  // function calculateOptions() {
  // const newOptions = [];

  // for (let i = 0; i < options.length; i++) {
  //   if (adminData?.menu.includes(options[i].value)) {
  //     newOptions.push(options[i]);
  //   }
  // }

  // return newOptions;
  // }

  function handleMenu(e) {
    const newArr = [];
    for (let i = 0; i < e.length; i++) {
      newArr.push(e[i].value);
    }
    setAdminData((adminData) => ({ ...adminData, menu: newArr }));

    onUpdateDepartment({ ...adminData, menu: newArr }, id);
  }

  function onUpdatePassword(password, id) {
    // updatePassword({ password, id });
  }

  async function onUpdateDepartment(formdata, id) {
    updateAdmin({ formdata, id });
  }

  function onError(errors) {}

  if (defaultOptions.length === 0) {
    return <Spinner />;
  }

  return (
    <Form
    // onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Username" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          value={adminData?.username || ""}
          id="username"
          {...register("username", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setAdminData((data) => ({ ...data, username: newVal }));
            onUpdateDepartment({ ...adminData, username: newVal }, id);
          }}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="email"
          value={adminData?.email || ""}
          id="email"
          {...register("email", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setAdminData((data) => ({ ...data, email: newVal }));
            onUpdateDepartment({ ...adminData, email: newVal }, id);
          }}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="password"
          id="password"
          placeholder="Type new password..."
          {...register("password", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setPassword(newVal);
            onUpdatePassword(newVal, id);
          }}
        />
      </FormRow>

      <FormRow label="Permissions" error={errors?.page?.message}>
        <Select
          // defaultValue={() => calculateOptions()}
          defaultValue={() => defaultOptions}
          isMulti
          name="colors"
          options={options}
          className="basic-multi-select"
          classNamePrefix="select"
          onChange={(e) => {
            handleMenu(e);
          }}
        />
      </FormRow>

      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <Button>{"Done"}</Button>
      </Stack>
    </Form>
  );
}

export default EditAdminForm;
