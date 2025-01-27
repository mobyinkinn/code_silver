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
  useUpdateImage,
} from "../../admin/collection/parts/useUser";
import SpinnerMini from "../../ui/SpinnerMini";

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

function EditVarientForm({ onCloseModal, id }) {
  const { data, isLoading: isWorking } = useCollection();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const filteredData = data.filter((el) => el._id === id);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { updateCollection, isUpdating } = useUpdateCollection();
  const [collectionData, setCollectionData] = useState(filteredData[0]);

  const { errors } = formState;

  // function handleMenu(e) {
  //   const newArr = [];
  //   for (let i = 0; i < e.length; i++) {
  //     newArr.push(e[i].value);
  //   }
  //   setCollectionData((collectionData) => ({
  //     ...collectionData,
  //     menu: newArr,
  //   }));

  //    onUpdateDepartment({ ...collectionData, menu: newArr }, id);
  // }

  function onUpdateImage(files, id) {
    const file = typeof files === "string" ? files : files[0];
    const formdata = new FormData();
    formdata.append("image", file);

    updateImage({ formdata, id });
  }

  async function onUpdateCollection(data) {
    const formdata = {
      type: data.type,
      title: data.title,
      description: data.description,
    };
    updateCollection({ formdata, id: data._id });
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
            onUpdateCollection({ ...collectionData, title: newVal });
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
            onUpdateCollection({ ...collectionData, type: newVal });
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
            setCollectionData((data) => ({ ...data, description: newVal }));
            onUpdateCollection({ ...collectionData, description: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Image" error={errors?.page?.message}>
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          {...register("bannerFile", {
            required: "This field is required",
          })}
          onChange={(e) => {
            const updatedValue = e.target.files;
            onUpdateImage(updatedValue, id);
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
        <Button disabled={isUpdatingImage}>
          {isUpdatingImage ? <SpinnerMini /> : "Done"}
        </Button>
      </Stack>
    </Form>
  );
}

export default EditVarientForm;
