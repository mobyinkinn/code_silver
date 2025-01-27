"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import AppLayout from "../navbarAdmin/AppLayout";
import { UserProvider } from "./parts/UserContext";
import UserTable from "./parts/UserTable";
import UserTableOperations from "./parts/UserTableOperations";

export default function Users() {
  return (
    <UserProvider>
      <AppLayout>
        <Row type="horizontal">
          <Heading as="h2">Admins</Heading>
          <UserTableOperations />
        </Row>
        <UserTable />
      </AppLayout>
    </UserProvider>
  );
}
