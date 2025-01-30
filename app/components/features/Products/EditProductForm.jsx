"use client";

import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { Stack } from "@mui/material";

import { useEffect, useState } from "react";

import {
  useCollection,
  useUpdateCollection,
} from "../../admin/collection/parts/useUser";
import SpinnerMini from "../../ui/SpinnerMini";
import {
  useUpdateVarient,
  useVarient,
} from "../../admin/varient/parts/useVarient";
import { updateVarient } from "../../services/api.varient";
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

function EditProductForm({ onCloseModal, id }) {
  const { data, isPending: isWorking } = useVarient();
  // const { updateImage, isUpdatingImage } = useUpdateImage();
  const { updateCollection, isUpdating } = useUpdateVarient();
  const [collectionData, setCollectionData] = useState({});
  const router = useRouter();

  useEffect(() => {
    const filteredData = data?.filter((el) => el._id === id);
    console.log(filteredData);
    if (filteredData) {
      setCollectionData(filteredData[0]);
    }
  }, [isWorking]);

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

  // function onUpdateImage(files, id) {
  //   const file = typeof files === "string" ? files : files[0];
  //   const formdata = new FormData();
  //   formdata.append("image", file);

  //   updateImage({ formdata, id });
  // }

  async function onUpdateCollection(data) {
    const name = data.name;
    let values = typeof data?.values === "string" && data.values.split(",");
    let prices = typeof data?.prices === "string" && data.prices.split(",");

    // if (values.length !== prices.length) {
    //   alert("Values are not equal to prices");
    // }

    for (let i = 0; i < values.length; i++) {
      values[i] = values[i].trim();
      prices[i] = Number(prices[i].trim());
    }

    const formdata = {
      name: name,
      prices: prices,
      values: values,
    };
    console.log(formdata);

    updateVarient({ formdata, id: data._id });
  }

  return (
    <Form
    // onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Name">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData.name}
          id="name"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, name: newVal }));
            onUpdateCollection({ ...collectionData, name: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Prices">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData.prices}
          id="prices"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, prices: newVal }));
            onUpdateCollection({ ...collectionData, prices: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Values">
        <Input
          disabled={isWorking}
          value={collectionData.values}
          type="text"
          id="values"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, values: newVal }));
            onUpdateCollection({ ...collectionData, values: newVal });
          }}
        />
      </FormRow>

      {/* <FormRow label="Image">
        <FileInput
          id="file"
          accept="image/*"
          type="file"
          onChange={(e) => {
            const updatedValue = e.target.files;
            onUpdateImage(updatedValue, id);
          }}
        />
      </FormRow> */}

      <Stack
        direction="row"
        sx={{
          justifyContent: "end",
          gap: "20px",
        }}
      >
        <Button onClick={() => router.push("/admin/varients")}>Done</Button>
      </Stack>
    </Form>
  );
}

export default EditProductForm;
