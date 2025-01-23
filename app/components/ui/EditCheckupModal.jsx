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
    formDataImage.append("image", file);

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
    const formDataBanner = new FormData();
    formDataBanner.append("banner", file);
    setEditData({ ...editData, [fieldName]: file });

    updateBanner(
      {
        id,
        data: formDataBanner,
      },
      {
        onSuccess: () => {
          toast.success("Banner updated successfully!");
          onCloseModal();
        },
        onError: (error) => {
          console.error("Failed to update Banner:", error);
          toast.error("Failed to update Banner. Please try again.");
        },
      }
    );

    if (file) {
      setEditData({ ...editData, [fieldName]: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm();
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

        <Stack direction={"row"} gap={6}>
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
                        onChange={(e) => handleImageChange(e, "image")}
                      />
                    </div>
                  </>
                )}
              </ImagePreviewContainer>
            </label>
          </FormRow>

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
                      <label htmlFor="banner-upload">
                        <FaEdit size={16} />
                      </label>
                      <input
                        name="banner"
                        id="banner-upload"
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        onChange={(e) => handleBannerChange(e, "banner")}
                      />
                    </div>
                  </>
                )}
              </ImagePreviewContainer>
            </label>
          </FormRow>
        </Stack>

        <FormRow>
          <Button
            variation="secondary"
            type="button"
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
