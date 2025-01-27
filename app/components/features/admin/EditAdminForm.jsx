import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { Stack } from "@mui/material";

import { useState } from "react";
import {
  useAdmin,
  useUpdateAdmin,
  useUpdatePassword,
} from "../../admin/userManagement/parts/useUser";
import Select from "react-select";

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

function EditAdminForm({ onCloseModal, id }) {
  const { data, isLoading: isWorking } = useAdmin();
  const filteredData = data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { updateAdmin, isUpdating } = useUpdateAdmin();
  const { updatePassword, isUpdating: isUpdatingPassword } =
    useUpdatePassword();
  const [adminData, setAdminData] = useState(filteredData[0]);
  const [password, setPassword] = useState("");

  const { errors } = formState;

  function calculateOptions() {
    const newOptions = [];

    for (let i = 0; i < options.length; i++) {
      if (adminData.menu.includes(options[i].value)) {
        newOptions.push(options[i]);
      }
    }

    return newOptions;
  }

  function handleMenu(e) {
    const newArr = [];
    for (let i = 0; i < e.length; i++) {
      newArr.push(e[i].value);
    }
    setAdminData((adminData) => ({ ...adminData, menu: newArr }));

    onUpdateDepartment({ ...adminData, menu: newArr }, id);
  }

  function onUpdatePassword(password, id) {
    updatePassword({ password, id });
  }

  async function onUpdateDepartment(formdata, id) {
    updateAdmin({ formdata, id });
  }

  function onError(errors) {}
  return (
    <Form
      // onSubmit={handleSubmit(onSubmit, onError)}
      type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Username" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          value={adminData.username}
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
          value={adminData.email}
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

      <FormRow label="Name" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          value={adminData.name}
          type="name"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setAdminData((data) => ({ ...data, name: newVal }));
            onUpdateDepartment({ ...adminData, name: newVal }, id);
          }}
        />
      </FormRow>

      <FormRow label="Password" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          value={password}
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
          defaultValue={() => calculateOptions()}
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
