import UserRow from "./UserRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useOrder } from "./useOrders";
// import { useUserContext } from "./UserContext";

const userDetails = [
  { id: 0, name: "Yogesh", username: "yogesh", status: "active" },
  { id: 1, name: "Test", username: "test1", status: "active" },
  { id: 2, name: "Test2", username: "test2", status: "inactive" },
  { id: 3, name: "Test3", username: "test3", status: "active" },
];

function UserTable() {
  const { data, isLoading, error } = useOrder();
  // const { filter } = useUserContext();

  if (isLoading) return <Spinner />;

  let filteredUsers = data;
  if (!filteredUsers?.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1.2fr 0.6fr 1.2fr 1fr 0.6fr 1fr">
        <Table.Header>
          <div>Address</div>
          <div>Notes</div>
          <div>Delivery Method</div>
          <div>Date</div>
          <div>Paid</div>
          <div>Delivered</div>
        </Table.Header>

        <Table.Body
          data={filteredUsers}
          render={(user) => <UserRow key={user._id} user={user} />}
        />
        <Table.Footer>
          {/* <Pagination count={userDetails.length} /> */}
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default UserTable;
