import styled from "styled-components";
// import { format, isToday } from "date-fns";

import Tag from "../../../ui/Tag";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import ConfirmDelete from "../../../ui/ConfirmDelete";

// import { formatCurrency } from "../../../utils/helpers";
// import { formatDistanceFromNow } from "../../../utils/helpers";
import Menus from "../../../ui/Menus";
import {
  HiArrowDownOnSquare,
  HiArrowUpOnSquare,
  HiEye,
  HiTrash,
} from "react-icons/hi2";
import { HiEyeOff, HiPencil } from "react-icons/hi";
import { useDeleteOrder } from "./useOrders";
// import { useBlockAdmin, useDeleteAdmin, useUnblockAdmin } from "./useUser";
// import EditOrderForm from "@/app/components/features/collections/EditOrderForm";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button, { IconButton } from "@/app/components/ui/Button";
// import { useNavigate } from "react-router-dom";
// import { useCheckout } from "../check-in-out/useCheckout";
// import useDeleteBooking from "./useDeleteBooking";

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
  user: { _id: id, address, deliveryMethod, notes, date, isDelivered, isPaid },
}) {
  const { deleteOrder, isDeleting } = useDeleteOrder();
  //   const navigate = useNavigate();
  //   const { checkout, isCheckingOut } = useCheckout();
  //   const { deleteBooking, isDeleting } = useDeleteBooking();
  // const { blockAdmin, isBlocking } = useBlockAdmin();
  // const { unblockAdmin, isUnblocking } = useUnblockAdmin();
  // const { deleteAdmin, isDeleting } = useDeleteAdmin();

  // const handleToggleStatus = () => {
  //   if (status === true) {
  //     blockAdmin(id); // Call block API if active
  //   } else {
  //     unblockAdmin(id); // Call unblock API if inactive
  //   }
  // };

  // let convertedStatus;
  // if (status === true) {
  //   convertedStatus = "active";
  // } else {
  //   convertedStatus = "inactive";
  // }
  // let status = "active";

  const router = useRouter();

  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  return (
    <Table.Row>
      <Stacked>
        <span>Address</span>
        <span>{address}</span>
      </Stacked>

      <Stacked>
        <span>Notes</span>
        <span>{notes}</span>
      </Stacked>

      <Stacked>
        <span>Delivery Method</span>
        <span>{deliveryMethod}</span>
      </Stacked>

      {/* <Stacked>
        <span>
          {menu.map((el, i) => (
            <span key={i}> {el + " "} </span>
          ))}
        </span>
      </Stacked> */}

      {/* <Tag type={statusToTagName[status]}>{status.replace("-", " ")}</Tag> */}

      {/* <Amount>{formatCurrency(totalPrice)}</Amount> */}

      <Stacked>
        <span>Date ordered</span>
        <span>{date.split("T")[0]}</span>
      </Stacked>

      <Stacked>
        <span>Paid</span>
        <span>{isPaid ? "Yes" : "No"}</span>
      </Stacked>

      <Stacked>
        <span>Delivered</span>
        <span>{isDelivered ? "Yes" : "No"}</span>
      </Stacked>

      {/* <Modal>
        <Menus.Menu> */}
      {/* <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            // onClick={handleToggleStatus}
            // disabled={isBlocking || isUnblocking}
          ></Menus.Button> */}
      {/* <Modal.Open opens="banner-form">
            <Menus.Button
              icon={<HiPencil />}
              onClick={() => router.push(`/admin/collections/add?id=${id}`)}
            />
          </Modal.Open> */}
      {/* <Modal.Window name="banner-form"> */}
      {/* <EditOrderForm id={id} /> */}
      {/* </Modal.Window> */}
      {/* <div style={{ position: "relative" }}>
            <IconButton
              onClick={() => router.push(`/admin/collections/edit/${id}`)}
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
            onConfirm={() => deleteOrder(id)}
          />
        </Modal.Window>
      </Modal> */}
    </Table.Row>
  );
}

export default UserRow;
