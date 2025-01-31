"use client";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { Stack } from "@mui/material";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";
import Spinner from "../../ui/Spinner";
import {
  useProduct,
  useUpdateProduct,
  useUpdateImage,
} from "../../admin/product/parts/useUser";

function EditProductForm({ id }) {
  const { data, isPending: isWorking } = useProduct();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const { updateProduct, isUpdating } = useUpdateProduct();
  const [collectionData, setCollectionData] = useState({});
  const router = useRouter();

  useEffect(() => {
    console.log(data);
    const filteredData = data?.filter((el) => el._id === id);
    console.log(filteredData);
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
    updateProduct({ formdata: data, id: data._id });
  }

  if (isWorking) {
    return <Spinner />;
  }

  return (
    <Form
    // onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow label="Name">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData?.name}
          id="name"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, name: newVal }));
            onUpdateCollection({ ...collectionData, name: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Price">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData?.price}
          id="price"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, price: newVal }));
            onUpdateCollection({ ...collectionData, price: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Description">
        <Input
          disabled={isWorking}
          value={collectionData?.description}
          type="text"
          id="description"
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
        <Button onClick={() => router.push("/admin/products")}>Done</Button>
      </Stack>
    </Form>
  );
}

export default EditProductForm;
