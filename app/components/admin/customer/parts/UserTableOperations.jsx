
import SortBy from "../../../ui/SortBy";
import TableOperations from "../../../ui/TableOperations";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import { exportCustomerData, fetchAllCustomers, importCustomerData } from "@/app/components/services/api.customer";
import styled from "styled-components";
import { useState } from "react";
import toast from "react-hot-toast";
const DragDropContainer = styled.div`
  border: 2px dashed #ccc;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background-color: #f9f9f9;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const FileName = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
`;
function UserTableOperations() {
  const [file, setFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile && uploadedFile.type === "text/csv") {
      setFile(uploadedFile);
      toast.success(`File ${uploadedFile.name} selected!`);
    } else {
      toast.error("Please upload a valid .csv file.");
    }
  };
  const handleUpload = async () => {
    
    if (!file) {
      toast.error("No file selected for upload.");
      return;
    }

    try {
      setIsUploading(true);
      await importCustomerData(file);
      toast.success("File uploaded successfully!");
      setFile(null);
      await fetchAllCustomers(); // Refresh table data
    } catch (error) {
      console.error("File upload failed:", error);
      toast.error("Failed to upload file.");
    } finally {
      setIsUploading(false);
    }
  };
  const handleExport = async () => {
    try {
      await exportCustomerData();
    } catch (error) {
      console.error("Error exporting customer data:", error);
    }
  };
  // const { filter, setFilter } = useUserContext();
  return (
    <TableOperations>
      {/* <Filter
        filterField="status"
        filter={filter}
        setFilter={setFilter}
        options={[
          { value: "All", label: "All" },
          { value: "Active", label: "Active" },
          { value: "Inactive", label: "Inactive" },
        ]}
      /> */}

      <SortBy
        options={[
          { value: "startDate-desc", label: "Sort by date (recent first)" },
          { value: "startDate-asc", label: "Sort by date (earlier first)" },
          { value: "name-dsc", label: "Sort by name (Z - A)" },
          { value: "name-asc", label: "Sort by name (A - Z)" },
        ]}
      />
      <Button variation="primary" size="medium" onClick={handleExport}>
        Export
      </Button>
      {/* <Button variation="primary" size="medium">
        Import
      </Button>
      <Modal>
        <Modal.Open opens="department-form">
          <Button variation="primary" size="medium">
            Add Customer
          </Button>
        </Modal.Open>
        <Modal.Window name="department-form">
          <CreateAdminForm />
        </Modal.Window>
      </Modal> */}
      <Modal>
        <Modal.Open opens="import-form">
          <Button variation="primary" size="medium">
            Import
          </Button>
        </Modal.Open>
        <Modal.Window name="import-form">
          <>
            <>
              <DragDropContainer
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDrop}
              >
                <p>Drag and drop your CSV file here</p>
                <p>or</p>
                <input
                  type="file"
                  accept=".csv"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ marginTop: "10px" }}
                />
              </DragDropContainer>
              {file && <FileName>Selected file: {file.name}</FileName>}
            </>
            <Button
              variation="primary"
              size="medium"
              onClick={handleUpload}
              disabled={isUploading}
              style={{ marginTop: "15px" }}
            >
              {isUploading ? "Uploading..." : "Upload"}
            </Button>
          </>
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default UserTableOperations;
