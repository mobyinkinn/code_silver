import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useUserContext } from "./UserContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateVarientForm from "@/app/components/features/varients/CreateVarientForm";

function UserTableOperations() {
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
      <Modal>
        <Modal.Open opens="department-form">
          <Button variation="primary" size="medium">
            Add Varient
          </Button>
        </Modal.Open>
        <Modal.Window name="department-form">
          <CreateVarientForm />
        </Modal.Window>
      </Modal>
    </TableOperations>
  );
}

export default UserTableOperations;
