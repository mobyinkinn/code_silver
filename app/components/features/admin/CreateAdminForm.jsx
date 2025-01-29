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

const options = [
  { value: "admin", label: "Admin" },
  { value: "banners", label: "Banners" },
  { value: "departments", label: "Departments" },
  { value: "doctors", label: "Doctors" },
  { value: "academics", label: "Academics" },
  { value: "downloadables", label: "Downloadables" },
  { value: "notices", label: "Notices" },
  { value: "tpa", label: "Tpa" },
  { value: "events", label: "Events" },
  { value: "blogs", label: "Blogs" },
  { value: "testimonials", label: "Testimonials" },
  { value: "awards", label: "Awards" },
  { value: "enquiries", label: "Enquiries" },
  { value: "videos", label: "Videos" },
  { value: "openings", label: "Openings" },
  { value: "careers", label: "careers" },
  { value: "plans", label: "Health Plans" },
  { value: "tips", label: "Health Tips" },
];

function CreateAdminForm({ cabinToEdit = {}, onCloseModal }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);

  const { createAdmin, isCreating } = useCreateAdmin();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

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
    };
    console.log("Department formdata: ", formdata);

    createAdmin(formdata, {
      onSuccess: (formdata) => {
        reset();
        onCloseModal();
      },
    });
  }
  function onError(errors) {
    // console.log(errors);
  }
  return (
    <Form
      style={{ overflow: "visible" }}
      onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
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

      {/* <FormRow label="Permissions" error={errors?.page?.message}>
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
      </FormRow> */}

      <Stack
        direction="row"
        sx={{
          gap: "20px",
          justifyContent: "end",
        }}
      >
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create new banner"}
        </Button>
      </Stack>
    </Form>
  );
}

export default CreateAdminForm;
