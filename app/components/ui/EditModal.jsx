import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";
import { Stack } from "@mui/material";
import { DateInput } from "./Input";
import FormRow from "./FormRow";
import { FaEdit } from "react-icons/fa";
import { useUpdateSingleImageFromBlog } from "../admin/blog/useBlogs";
import { ImagePreviewContainer } from "./ImagePreviewContainer";

const StyledConfirmEdit = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & label {
    font-size: 1rem;
    color: var(--color-grey-700);
  }

  & input,
  & textarea {
    width: 100%;
    padding: 0.8rem;
    font-size: 1rem;
    border: 1px solid var(--color-grey-300);
    border-radius: var(--border-radius-sm);
    margin-top: 0.3rem;
  }

  & textarea {
    resize: vertical;
    min-height: 8rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
  }
`;

function ConfirmEdit({
  id,
  onCloseModal,
  resourceName,
  onConfirm,
  disabled,
  editData,
  setEditData,
}) {
  const { mutate: updateSingleImageFromBlog } = useUpdateSingleImageFromBlog();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    updateSingleImageFromBlog(
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
      setEditData({ ...editData, image: file });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCloseModal?.();
    onConfirm(); // Call the onConfirm function to handle the submission logic
  };

  return (
    <StyledConfirmEdit>
      <Heading as="h3">Edit {resourceName}</Heading>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={editData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Date:
          <DateInput
            disabled={disabled}
            type="date"
            id="date"
            name="date"
            value={editData.date || ""}
            onChange={handleInputChange}
          />
        </label>
        <Stack direction={"row"}>
          <label>
            Small Description:
            <textarea
              name="smallDescription"
              value={editData.smallDescription}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={editData.description}
              onChange={handleInputChange}
            />
          </label>
        </Stack>

        <Stack label={"Image"}>
          <label>
            Image{" "}
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
        </Stack>

        <div>
          <Button
            variation="secondary"
            onClick={onCloseModal}
            disabled={disabled}
          >
            Cancel
          </Button>
          <Button variation="primary" onClick={onConfirm} disabled={disabled}>
            Save Changes
          </Button>
        </div>
      </form>
    </StyledConfirmEdit>
  );
}

export default ConfirmEdit;
