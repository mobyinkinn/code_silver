import SortBy from "../../../ui/SortBy";
import Filter from "../../../ui/Filter";
import TableOperations from "../../../ui/TableOperations";
import { useUserContext } from "./UserContext";
import Modal from "@/app/components/ui/Modal";
import Button from "@/app/components/ui/Button";
import CreateCollectionForm from "@/app/components/features/collections/CreateCollectionForm";
import { useRouter } from "next/navigation";

function UserTableOperations() {
  const router = useRouter();
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
      <Button
        onClick={() => router.push("/admin/blogs/add")}
        variation="primary"
        size="medium"
      >
        Add Blog
      </Button>
      {/* <Modal>
        <Modal.Open opens="department-form">
         
        </Modal.Open>
        <Modal.Window name="department-form">
          <CreateCollectionForm />
        </Modal.Window>
      </Modal> */}
    </TableOperations>
  );
}

export default UserTableOperations;
