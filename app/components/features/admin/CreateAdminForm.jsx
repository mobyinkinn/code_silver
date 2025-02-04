"use client";

import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
// import useCreateCabin from "./useCreateCabin";
// import useEditCabin from "./useEditCabin";
// import { useCreateDepartment } from "../../admin/departments/parts/useDepartment";
import { Stack } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { createAdmin } from "../../services/api.User";
import Select from "react-select";
import { useState } from "react";
import { useCreateAdmin } from "../../admin/admin/parts/useUser";
import { useRouter } from "next/navigation";

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

function CreateAdminForm({ cabinToEdit = {} }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);

  const { createAdmin, isCreating } = useCreateAdmin();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const router = useRouter();

  //   const { isEditing, editCabin } = useEditCabin();
  const [menu, setMenu] = useState([]);
  const [isshow, setisshow] = useState("");
  const isWorking = isCreating;

  function handleMenu(e) {
    const newArr = [];
    for (let i = 0; i < e.length; i++) {
      newArr.push(e[i].value);
    }
    setMenu(newArr);
  }

  function onSubmit(data) {
    const formdata = {
      username: data.username,
      email: data.email,
      password: data.password,
      menu: menu,
    };

    createAdmin(formdata, {
      onSuccess: (formdata) => {
        reset();
        router.push("/admin/adminuser");
      },
    });
  }

  function onError(errors) {}
  return (
    <Form
      style={{ overflow: "visible" }}
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Username" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="username"
          {...register("username", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="email"
          id="email"
          {...register("email", {
            required: "This field is required",
          })}
        />
      </FormRow>

      {/* <FormRow label="Name" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="name"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow> */}

      <FormRow label="Password" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type={!isshow ? "password" : "name"}
          id="password"
          {...register("password", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Permissions" error={errors?.page?.message}>
        <Select
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
          gap: "20px",
          justifyContent: "end",
        }}
      >
        <Button
          onClick={() => router.push("/admin/adminuser")}
          variation="secondary"
          type="reset"
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create new Admin"}
        </Button>
      </Stack>
    </Form>
  );
}

export default CreateAdminForm;
