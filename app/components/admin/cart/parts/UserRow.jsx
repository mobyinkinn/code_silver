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
import { useDeleteCart } from "./useCart";
// import { useBlockAdmin, useDeleteAdmin, useUnblockAdmin } from "./useUser";
// import EditCartForm from "@/app/components/features/collections/EditCartForm";
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
  user: {
    _id: id,
    address,
    createdAt,
    price,
    totalWt,
    notes,
    eta,
    finalPrice,
    countryCode,
  },
}) {
  const { deleteCart, isDeleting } = useDeleteCart();
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
        <span>Ordered On</span>
        <span>{createdAt.split("T")[0]}</span>
      </Stacked>

      <Stacked>
        <span>Eta</span>
        <span>{eta}</span>
      </Stacked>

      <Stacked>
        <span>Country Code</span>
        <span>{countryCode}</span>
      </Stacked>

      <Stacked>
        <span>Final Price</span>
        <span>{finalPrice}</span>
      </Stacked>

      <Stacked>
        <span>Notes</span>
        <span>{notes ? notes : "None"}</span>
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

      <Modal>
        <Menus.Menu>
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
          {/* <EditCartForm id={id} /> */}
          {/* </Modal.Window> */}
          <div style={{ position: "relative" }}>
            <IconButton onClick={() => router.push(`/admin/carts/edit/${id}`)}>
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
            onConfirm={() => deleteCart(id)}
          />
        </Modal.Window>
      </Modal>
    </Table.Row>
  );
}

export default UserRow;
