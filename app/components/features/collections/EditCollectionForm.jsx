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
  useCollection,
  useUpdateCollection,
} from "../../admin/collection/parts/useUser";

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

function EditCollectionForm({ onCloseModal, id }) {
  const { data, isLoading: isWorking } = useCollection();
  const filteredData = data.filter((el) => el._id === id);
  console.log(filteredData);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { updateCollection, isUpdating } = useUpdateCollection();
  const [collectionData, setCollectionData] = useState(filteredData[0]);

  const { errors } = formState;

  function calculateOptions() {
    const newOptions = [];

    for (let i = 0; i < options.length; i++) {
      if (collectionData.menu.includes(options[i].value)) {
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
    setCollectionData((collectionData) => ({
      ...collectionData,
      menu: newArr,
    }));

    onUpdateDepartment({ ...collectionData, menu: newArr }, id);
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
      <FormRow label="Title" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData.title}
          id="title"
          {...register("title", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, title: newVal }));
            onUpdateDepartment({ ...collectionData, title: newVal }, id);
          }}
        />
      </FormRow>

      <FormRow label="Type" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData.type}
          id="type"
          {...register("type", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, type: newVal }));
            onUpdateDepartment({ ...collectionData, type: newVal }, id);
          }}
        />
      </FormRow>

      <FormRow label="Description" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          value={collectionData.description}
          type="text"
          id="description"
          placeholder="Type new password..."
          {...register("description", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const newVal = e.target.value;
            setPassword(newVal);
            onUpdatePassword(newVal, id);
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

export default EditCollectionForm;
