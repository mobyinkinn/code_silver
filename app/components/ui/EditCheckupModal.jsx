import React from "react";
import Form from "./Form";
import Button from "./Button";
import FileInput from "./FileInput";
import FormRow from "./FormRow";
import { Stack } from "@mui/material";
import Heading from "./Heading";
import Input from "./Input";
import { ImagePreviewContainer } from "./ImagePreviewContainer";
import { FaEdit } from "react-icons/fa";
import {
  useUpdateCheckupBanner,
  useUpdateCheckupImage,
} from "../admin/health_plans/useCheckups";

const ConfirmEdit = ({
  id,
  onCloseModal,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
}) => {
  const { mutate: updateImage } = useUpdateCheckupImage();
  const { mutate: updateBanner } = useUpdateCheckupBanner();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();

    if (editData.image instanceof File) {
      formDataImage.append("image", editData.image);
    }

    updateImage(
      {
        id,
        data: formDataImage,
      },
      {
        onSuccess: () => {
          toast.success("Image updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Image:", error);
          toast.error("Failed to update Image. Please try again.");
        },
      }
    );

    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  const handleBannerChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm(); // Call the onConfirm function to handle the submission logic
  };

  return (
    <Form onSubmit={handleSubmit} type={onCloseModal ? "modal" : "regular"}>
      <Heading as="h3">Edit {resourceName}</Heading>

      <Stack gap={2} pt={5}>
        <FormRow label="Title">
          <Input
            disabled={disabled}
            type="text"
            name="title"
            value={editData.title || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        <FormRow label="Description">
          <Input
            disabled={disabled}
            type="text"
            name="description"
            value={editData.description || ""}
            onChange={handleInputChange}
          />
        </FormRow>
        {/* <FormRow label={"Image"}>
          <FileInput
            name="image"
            accept="image/*"
            type="file"
            onChange={(e) => handleImageChange(e, "image")}
          />
          
        </FormRow> */}
        <FormRow label={"Image"}>
          <label>
            <ImagePreviewContainer>
              {editData.image && (
                <>
                  <img
                    src={
                      typeof editData.image === "string"
                        ? editData.image
                        : URL.createObjectURL(editData.image)
                    }
                    alt="Preview"
                  />
                  <div className="edit-icon">
                    <label htmlFor="image-upload">
                      <FaEdit size={16} />
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleImageChange}
                    />
                  </div>
                </>
              )}
            </ImagePreviewContainer>
          </label>
        </FormRow>
        {/* <FormRow label={"Banner"}>
          <FileInput
            name="banner"
            accept="image/*"
            type="file"
            onChange={(e) => handleBannnerChange(e, "banner")}
          />
        </FormRow> */}
        <FormRow label={"Banner"}>
          <label>
            <ImagePreviewContainer>
              {editData.bannerImage && (
                <>
                  <img
                    src={
                      typeof editData.bannerImage === "string"
                        ? editData.bannerImage
                        : URL.createObjectURL(editData.bannerImage)
                    }
                    alt="Preview"
                  />
                  <div className="edit-icon">
                    <label htmlFor="image-upload">
                      <FaEdit size={16} />
                    </label>
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={handleBannerChange}
                    />
                  </div>
                </>
              )}
            </ImagePreviewContainer>
          </label>
        </FormRow>

        <FormRow>
          <Button
            variation="secondary"
            type="button" // Change type to button to prevent default form submission behavior
            onClick={onCloseModal}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={disabled}>
            Save Changes
          </Button>
        </FormRow>
      </Stack>
    </Form>
  );
};

export default ConfirmEdit;
