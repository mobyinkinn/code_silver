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
// import Select from "react-select";
import { useState } from "react";
import { useCreateAdmin } from "../../admin/admin/parts/useUser";
import { useRouter } from "next/navigation";
import { useCreateBlog } from "../../admin/blog/parts/useBlog";

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

function CreateBlogForm() {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);
  const router = useRouter();
  const { createBlog, isCreating } = useCreateBlog();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;
  const isWorking = isCreating;

  function onSubmit(data) {
    const file = typeof data.image === "string" ? data.image : data.image[0];
    const date = new Date();
    console.log(data);

    const formdata = new FormData();
    formdata.append("image", file);
    formdata.append("title", data.title);
    formdata.append("content", data.content);
    formdata.append("writer", data.writer);
    formdata.append("date", date);

    createBlog(formdata, {
      onSuccess: (formdata) => {
        reset();
        router.push("/admin/blogs");
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
    >
      <FormRow label="Title" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="title"
          {...register("title", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Content" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="content"
          {...register("content", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Writer" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="writer"
          {...register("writer", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label={"Image"}>
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          {...register("image", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <Stack
        direction="row"
        sx={{
          gap: "20px",
          marginTop: "30px",
          justifyContent: "end",
        }}
      >
        <Button
          variation="secondary"
          size="medium"
          type="reset"
          onClick={() => router.push("/admin/blogs")}
        >
          Cancel
        </Button>
        <Button size="medium" variation="primary" disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create New Blog"}
        </Button>
      </Stack>
    </Form>
  );
}

export default CreateBlogForm;
