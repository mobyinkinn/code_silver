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

import SpinnerMini from "../../ui/SpinnerMini";
import Spinner from "../../ui/Spinner";
import { useRouter } from "next/navigation";
import {
  useBlog,
  useUpdateBlog,
  useUpdateImage,
} from "../../admin/blog/parts/useBlog";

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

function EditBlogForm({ id }) {
  // const { data, isPending: isWorking } = useCollection();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const { updateBlog, isUpdating } = useUpdateBlog();
  const { data, isPending: isWorking } = useBlog();
  const router = useRouter();

  // const { updateCollection, isUpdating } = useUpdateCollection();
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
      writer: data.writer,
      title: data.title,
      content: data.content,
    };
    console.log(formdata);
    updateBlog({ formdata, id: data._id });
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

      <FormRow label="Writer">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData.writer || ""}
          id="writer"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, writer: newVal }));
            onUpdateCollection({ ...collectionData, writer: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Content">
        <Input
          disabled={isWorking}
          value={collectionData.content || ""}
          type="text"
          id="content"
          placeholder="Type new password..."
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, content: newVal }));
            onUpdateCollection({ ...collectionData, content: newVal });
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
            router.push("/admin/blogs");
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

export default EditBlogForm;
