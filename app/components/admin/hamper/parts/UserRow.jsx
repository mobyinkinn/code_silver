import styled from "styled-components";
// import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

import Menus from "../../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import { useDeleteHamper } from "./useHamper";
import Image from "next/image";
import { IconButton } from "@/app/components/ui/Button";
import { useRouter } from "next/navigation";

const Stacked = styled.div`
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;

  & span:first-child {
    font-weight: 500;
  }

  & span:last-child {
    color: var(--color-grey-500);
    font-size: 0.9rem;
  }
`;

function UserRow({ user: { _id: id, name, price } }) {
  const { deleteHamper, isDeleting } = useDeleteHamper();
  const router = useRouter();

  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  return (
    <Table.Row>
      <Stacked>
        <span>Name</span>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>Price</span>
        <span>{price}</span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <div style={{ position: "relative" }}>
            <IconButton
              onClick={() => router.push(`/admin/hampers/edit/${id}`)}
            >
              <HiPencil />
            </IconButton>
          </div>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={() => deleteHamper(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default UserRow;
