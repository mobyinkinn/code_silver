"use client";

import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import { UserProvider } from "./parts/UserContext";
import UserTable from "./parts/UserTable";
import UserTableOperations from "./parts/UserTableOperations";

export default function Collections() {
  return (
    <UserProvider>
      <Row type="horizontal">
        <Heading as="h2">Collections</Heading>
        <UserTableOperations />
      </Row>
      <UserTable />
    </UserProvider>
  );
}
