"use client";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { Stack, Typography } from "@mui/material";

import { useEffect, useState } from "react";

import {
  useCollection,
  useUpdateCollection,
  useUpdateImage,
} from "../../admin/collection/parts/useUser";
import SpinnerMini from "../../ui/SpinnerMini";
import Spinner from "../../ui/Spinner";
import { useRouter } from "next/navigation";

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

function EditCollectionForm({ id }) {
  const { data, isPending: isWorking } = useCollection();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const router = useRouter();

  const { updateCollection, isUpdating } = useUpdateCollection();
  const [collectionData, setCollectionData] = useState({});

  useEffect(() => {
    const filteredData = data?.filter((el) => el._id === id);
    if (filteredData) {
      setCollectionData(filteredData[0]);
    }
  }, [isWorking]);

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

  if (isWorking) {
    return <Spinner />;
  }

  if (!data || collectionData == {}) {
    return <div>No data availabe</div>;
  }
  return (
    <Form
    // onSubmit={handleSubmit(onSubmit, onError)}
    // type={onCloseModal ? "modal" : "regular"}
    >
      <FormRow label="Title">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData?.title || ""}
          id="title"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, title: newVal }));
            onUpdateCollection({ ...collectionData, title: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Type">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData.type || ""}
          id="type"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, type: newVal }));
            onUpdateCollection({ ...collectionData, type: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Description">
        <Input
          disabled={isWorking}
          value={collectionData.description || ""}
          type="text"
          id="description"
          placeholder="Type new password..."
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, description: newVal }));
            onUpdateCollection({ ...collectionData, description: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Image">
        <FileInput
          id="file"
          accept="image/*"
          type="file"
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
        <Stack
          onClick={() => {
            router.push("/admin/collections");
          }}
          sx={{
            border: "1px solid #333",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 10px",
            cursor: "Pointer",
          }}
        >
          <Typography color="#333">Cancel</Typography>
        </Stack>

        <Button disabled={isUpdatingImage}>
          {isUpdatingImage ? <SpinnerMini /> : "Done"}
        </Button>
      </Stack>
    </Form>
  );
}

export default EditCollectionForm;
