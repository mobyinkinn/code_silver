"use client";

import Row from "../../ui/Row";
import { UserProvider } from "./parts/UserContext";
import UserTable from "./parts/UserTable";
import UserTableOperations from "./parts/UserTableOperations";

export default function Reviews() {
  return (
    <UserProvider>
      <UserTableOperations />
      <UserTable />
    </UserProvider>
  );
}
