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
import { useCart, useUpdateCart } from "../../admin/cart/parts/useCart";

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
  const { data, isPending: isWorking } = useCart();
  const { updateImage, isUpdatingImage } = useUpdateImage();
  const router = useRouter();

  const { updateCart, isUpdating } = useUpdateCart();
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
      address: data.address,
      eta: data.eta,
      countryCode: data.countryCode,
      notes: data.notes,
    };
    // updateCart({ formdata, id: data._id });
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
      <FormRow label="Address">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData?.address || ""}
          id="address"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, address: newVal }));
            onUpdateCollection({ ...collectionData, address: newVal });
          }}
        />
      </FormRow>

      <FormRow label="ETA">
        <Input
          disabled={isWorking}
          type="text"
          value={collectionData?.eta || ""}
          id="type"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, eta: newVal }));
            onUpdateCollection({ ...collectionData, eta: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Country Code">
        <Input
          disabled={isWorking}
          value={collectionData?.countryCode || ""}
          type="text"
          id="countryCode"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, countryCode: newVal }));
            onUpdateCollection({ ...collectionData, countryCode: newVal });
          }}
        />
      </FormRow>

      <FormRow label="Notes">
        <Input
          disabled={isWorking}
          value={collectionData?.notes || "None"}
          type="text"
          id="notes"
          onChange={(e) => {
            const newVal = e.target.value;
            setCollectionData((data) => ({ ...data, notes: newVal }));
            onUpdateCollection({ ...collectionData, notes: newVal });
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
            router.push("/admin/carts");
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
