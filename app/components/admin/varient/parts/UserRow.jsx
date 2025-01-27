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
import { useDeleteVarient } from "./useVarient";
import Image from "next/image";

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

function UserRow({
  user: { _id: id, name, noOfProducts, prices, values, weights },
}) {
  const { deleteVarient, isDeleting } = useDeleteVarient();

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
        <span>Values</span>
        <span>
          {values.map((el, i) => (
            <span key={i}>{el}&nbsp;</span>
          ))}
        </span>
      </Stacked>

      <Stacked>
        <span>Prices</span>
        <span>
          {prices.map((el, i) => (
            <span key={i}>{el}&nbsp;</span>
          ))}
        </span>
      </Stacked>

      <Modal>
        <Menus.Menu>
          <Modal.Open opens="banner-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="banner-form">
            {/* <EditCollectionForm id={id} /> */}
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={() => deleteVarient(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default UserRow;
