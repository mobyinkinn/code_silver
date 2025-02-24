import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useUserContext } from "./UserContext";
import CreateAdminForm from "@/app/components/features/admin/CreateAdminForm";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

function UserTableOperations() {
  // const { filter, setFilter } = useUserContext();
  const router = useRouter();
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
      <Button variation="primary" size="medium">
        Export
      </Button>
      <Button variation="primary" size="medium">
        Import
      </Button>
      <Button variation="primary" size="medium">
        Add Product
      </Button>
      {/* <Modal>
        <Modal.Open opens="department-form">
          <Button variation="primary" size="medium">
            Add Admin
          </Button>
        </Modal.Open>
        <Modal.Window name="department-form">
          <CreateAdminForm />
        </Modal.Window>
      </Modal> */}
    </TableOperations>
  );
}

export default UserTableOperations;
