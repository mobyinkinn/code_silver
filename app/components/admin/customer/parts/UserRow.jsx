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
import { useDeleteCustomer } from "./useUser";
// import { useBlockAdmin, useDeleteAdmin, useUnblockAdmin } from "./useUser";
import EditAdminForm from "@/app/components/features/Admin/EditAdminForm";
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
  user: {
    _id: id,
    name,
    subscribed,
    address,
    totalOrders,
    contact,
    countryCode,
    email,
    totalAmount,
  },
}) {
  const { deleteAdmin, isDeleting } = useDeleteCustomer();
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

  const statusToTagName = {
    unconfirmed: "blue",
    active: "green",
    inactive: "silver",
  };

  return (
    <Table.Row>
      <Stacked>
        <span>{name}</span>
      </Stacked>

      <Stacked>
        <span>{email}</span>
      </Stacked>

      <Stacked>
        <span>{subscribed ? "Yes" : "No"}</span>
      </Stacked>

      <Stacked>
        <span>{address}</span>
      </Stacked>

      <Stacked>
        <span>{totalOrders.length}</span>
      </Stacked>

      <Stacked>
        <span>{contact}</span>
      </Stacked>

      <Stacked>
        <span>{countryCode}</span>
      </Stacked>

      <Stacked>
        <span>{totalAmount}</span>
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

      {/* <Modal>
        <Menus.Menu>
           <Menus.Button
            icon={status ? <HiEye /> : <HiEyeOff />}
            // onClick={handleToggleStatus}
            // disabled={isBlocking || isUnblocking}
          ></Menus.Button> 
          <Modal.Open opens="banner-form">
            <Menus.Button icon={<HiPencil />} />
          </Modal.Open>
          <Modal.Window name="banner-form">
            <EditAdminForm id={id} />
          </Modal.Window>
          <Modal.Open opens="delete">
            <Menus.Button icon={<HiTrash />}></Menus.Button>
          </Modal.Open>
        </Menus.Menu>
        <Modal.Window name="delete">
          <ConfirmDelete
            resourceName="Banner"
            disabled={isDeleting}
            onConfirm={() => deleteAdmin(id)}
          />
        </Modal.Window>
      </Modal>*/}
    </Table.Row>
  );
}

export default UserRow;
