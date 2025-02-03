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
import { createCollection } from "../../services/api.collection";
// import Select from "react-select";
import { useState } from "react";
import { useCreateAdmin } from "../../admin/admin/parts/useUser";
import { useCreateVarient } from "../../admin/varient/parts/useVarient";
import { useRouter } from "next/navigation";
import { useCreateHamper } from "../../admin/hamper/parts/useHamper";

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

export default function CreateHampersForm({ cabinToEdit = {}, onCloseModal }) {
  //   const { id: editId, ...editValues } = cabinToEdit;
  //   const isEditSession = Boolean(editId);
  const router = useRouter();

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  const { isCreating, createHamper } = useCreateHamper();
  const [isshow, setisshow] = useState("");
  const isWorking = isCreating;

  // function handleMenu(e) {
  //   const newArr = [];
  //   for (let i = 0; i < e.length; i++) {
  //     newArr.push(e[i].value);
  //   }
  //   setMenu(newArr);
  // }

  function onSubmit(data) {
    const formdata = {
      name: data.name,
      price: data.price,
    };

    createHamper(formdata, {
      onSuccess: (data) => {
        reset();
        router.push("/admin/hampers");
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
      <FormRow label="Name" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register("name", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="price" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="price"
          name="price"
          {...register("price", {
            required: "This field is required",
          })}
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
          variation="secondary"
          size="medium"
          type="reset"
          onClick={() => router.push("/admin/varients")}
        >
          Cancel
        </Button>
        <Button size="medium" variation="primary" disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create new admin"}
        </Button>
      </Stack>
    </Form>
  );
}
