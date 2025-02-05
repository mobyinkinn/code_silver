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
import { Stack, Typography } from "@mui/material";
import SpinnerMini from "../../ui/SpinnerMini";
import { createCollection } from "../../services/api.collection";
// import Select from "react-select";
import { useState } from "react";
import { useCreateAdmin } from "../../admin/admin/parts/useUser";
import { useRouter } from "next/navigation";
import { useCreateBuyXGetYCode } from "./useBuyXGetYCode";

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

export default function CreateBuyXGetY() {
  const [isCode, setIsCode] = useState(true);

  return (
    <Stack gap="30px">
      <Stack
        sx={{
          flexDirection: "row",
          border: "1px solid #eee",
          width: "fit-content",
          borderRadius: "5px",
          backgroundColor: "rgba(255, 255, 255)",
          overflow: "hidden",
        }}
      >
        <Typography
          padding={"5px 20px"}
          sx={{
            backgroundColor: isCode ? "var(--color-brand-600)" : "white",
            color: isCode ? "white" : "black",
            cursor: "pointer",
          }}
          onClick={() => setIsCode((isCode) => !isCode)}
        >
          Code
        </Typography>
        <Typography
          padding={"5px 20px"}
          sx={{
            backgroundColor: !isCode ? "var(--color-brand-600)" : "white",
            color: !isCode ? "white" : "black",
            cursor: "pointer",
          }}
          onClick={() => setIsCode((isCode) => !isCode)}
        >
          Auto
        </Typography>
      </Stack>
      {isCode ? <Code /> : <Auto />}
    </Stack>
  );
}

function Code() {
  const router = useRouter();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  // const { isCreating, createAdmin } = useCreateAdmin();
  const { isCreating, createBuyXGetYCode } = useCreateBuyXGetYCode();
  const isWorking = isCreating;

  function onSubmit(data) {
    const formdata = {
      ...data,
      customerBuysQnt: Number(data.customerBuysQnt),
      customerGetQnt: Number(data.customerGetQnt),
      usesPerOrder: Number(data.usesPerOrder),
      discountValue: 2,
      customersEligible: [],
      combinations: "sdf",
      discountValueType: "abc",
      appliedTo: "674e96c0c912c9ead9560eb5",
      anyItemFrom: "674e96c0c912c9ead9560eb5",
    };

    console.log(formdata);

    createBuyXGetYCode(formdata, {
      onSuccess: (formdata) => {
        reset();
        router.push("/admin/discounts");
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
      <FormRow label="Code" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="code"
          {...register("code", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="customerBuys" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="customerBuys"
          {...register("customerBuys", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="CustomerBuysQnt" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="customerBuysQnt"
          {...register("customerBuysQnt", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="CustomerGetQnt" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="customerGetQnt"
          {...register("customerGetQnt", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="UsesPerOrder" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="usesPerOrder"
          {...register("usesPerOrder", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Start time" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="date"
          id="startTime"
          {...register("startTime", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="End time" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="date"
          id="endTime"
          {...register("endTime", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <Stack
        direction="row"
        sx={{
          gap: "20px",
          justifyContent: "end",
          marginTop: "30px",
        }}
      >
        <Button
          variation="secondary"
          size="medium"
          type="reset"
          onClick={() => router.push("/admin/collections")}
        >
          Cancel
        </Button>
        <Button size="medium" variation="primary" disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create new discount"}
        </Button>
      </Stack>
    </Form>
  );
}

function Auto() {
  const router = useRouter();
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: {},
  });
  const { errors } = formState;

  // const { isCreating, createAdmin } = useCreateAdmin();
  const { isCreating, createBuyXGetYCode } = useCreateBuyXGetYCode();
  const isWorking = isCreating;

  function onSubmit(data) {
    const formdata = {
      ...data,
      customerBuysQnt: Number(data.customerBuysQnt),
      customerGetQnt: Number(data.customerGetQnt),
      usesPerOrder: Number(data.usesPerOrder),
      discountValue: 2,
      customersEligible: [],
      combinations: "sdf",
      discountValueType: "abc",
      appliedTo: "674e96c0c912c9ead9560eb5",
      anyItemFrom: "674e96c0c912c9ead9560eb5",
    };

    console.log(formdata);

    createBuyXGetYCode(formdata, {
      onSuccess: (formdata) => {
        reset();
        router.push("/admin/discounts");
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

      <FormRow label="customerBuys" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="customerBuys"
          {...register("customerBuys", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="CustomerBuysQnt" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="customerBuysQnt"
          {...register("customerBuysQnt", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="CustomerGetQnt" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="customerGetQnt"
          {...register("customerGetQnt", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="UsesPerOrder" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="usesPerOrder"
          {...register("usesPerOrder", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="Start time" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="date"
          id="startTime"
          {...register("startTime", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <FormRow label="End time" error={errors?.page?.message}>
        <Input
          disabled={isWorking}
          type="date"
          id="endTime"
          {...register("endTime", {
            required: "This field is required",
          })}
        />
      </FormRow>

      <Stack
        direction="row"
        sx={{
          gap: "20px",
          justifyContent: "end",
          marginTop: "30px",
        }}
      >
        <Button
          variation="secondary"
          size="medium"
          type="reset"
          onClick={() => router.push("/admin/collections")}
        >
          Cancel
        </Button>
        <Button size="medium" variation="primary" disabled={isWorking}>
          {isWorking ? <SpinnerMini /> : "Create new discount"}
        </Button>
      </Stack>
    </Form>
  );
}
