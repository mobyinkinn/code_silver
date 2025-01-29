import UserRow from "./UserRow";
import Table from "../../../ui/Table";
import Menus from "../../../ui/Menus";
import Empty from "../../../ui/Empty";
// import useUsers from "./useBookings";
import Spinner from "../../../ui/Spinner";
import Pagination from "../../../ui/Pagination";
import { useBlog } from "./useBlog";
// import { useUserContext } from "./UserContext";

const userDetails = [
  { id: 0, name: "Yogesh", username: "yogesh", status: "active" },
  { id: 1, name: "Test", username: "test1", status: "active" },
  { id: 2, name: "Test2", username: "test2", status: "inactive" },
  { id: 3, name: "Test3", username: "test3", status: "active" },
];

function UserTable() {
  const { data, isLoading, error } = useBlog();
  // const { filter } = useUserContext();

  if (isLoading) return <Spinner />;

  let filteredUsers = data;
  // if (filter !== "All") {
  // filteredUsers = userDetails.filter(
  // (el, i) => el.status.toLowerCase() === filter.toLowerCase()
  // );
  // }
  //   const { bookings, isLoading, count } = useUsers();

  // if (isLoading) return <Spinner />;
  if (!filteredUsers?.length) return <Empty resourceName="Admins" />;
  return (
    <Menus>
      <Table columns="1fr 1.6fr 0.7fr 1.2fr 3.2rem">
        <Table.Header>
          <div>Title</div>
          <div>Content</div>
          <div>Image</div>
          <div>Writer</div>
          <div></div>
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
