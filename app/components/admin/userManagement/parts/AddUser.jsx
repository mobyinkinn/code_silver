import { InnerContainerHead } from "@/app/styledComponents/admin/AdminHead";
import {
  BlueButtonSmall,
  GreenButtonSmall,
} from "@/app/styledComponents/admin/Buttons";
import {
  InnerContainer,
  InnerContainerHeadSection,
  ModalContainer,
} from "@/app/styledComponents/admin/Container";
import {
  Checkbox,
  CheckboxLabel,
  InputSection,
  Label,
  TextInput,
} from "@/app/styledComponents/admin/Inputs";
import { Box, Stack } from "@mui/material";

const menu = [
  "Departments",
  "Doctors",
  "Appointments",
  "Academics",
  "Download Files",
  "Academics Notices",
  "Tpa Logo",
  "Events",
  "Testimonials",
  "Award Accreditation",
  "Enquiries",
  "Contact",
  "Videos",
  "Latest Openings",
  "Careers",
  "Health Plans",
  "Health Tips",
];

const cms = ["Menus", "Pages", "Posts", "Templates", "Site Settings"];

const donations = ["Donation tO", "Doners"];

export default function AddUser({ setViewForm }) {
  return (
    <ModalContainer>
      <InnerContainer width={"80%"}>
        <InnerContainerHead>New User</InnerContainerHead>
        <InnerContainerHeadSection column>
          <InputSection>
            <Label>Name</Label>
            <TextInput placeholder="Enter Name" />
          </InputSection>
          <InputSection>
            <Label>Username</Label>
            <TextInput placeholder="Enter Username" />
          </InputSection>
          <InputSection>
            <Label>Password</Label>
            <TextInput placeholder="Enter Password" type="password" />
          </InputSection>
          <InputSection alignItems={"baseline"}>
            <Label>Select Menu</Label>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              maxWidth={"700px"}
              gap={"10px"}
            >
              {menu.map((el, i) => {
                return (
                  <Checkbox>
                    <input type="checkbox" />
                    <CheckboxLabel>{el}</CheckboxLabel>
                  </Checkbox>
                );
              })}
            </Stack>
          </InputSection>
          <InputSection alignItems={"baseline"}>
            <Label>Submenu (CMS)</Label>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              maxWidth={"700px"}
              gap={"10px"}
            >
              {cms.map((el, i) => {
                return (
                  <Checkbox>
                    <input type="checkbox" />
                    <CheckboxLabel>{el}</CheckboxLabel>
                  </Checkbox>
                );
              })}
            </Stack>
          </InputSection>
          <InputSection alignItems={"baseline"}>
            <Label>Submenu (Donations)</Label>
            <Stack
              direction={"row"}
              flexWrap={"wrap"}
              maxWidth={"700px"}
              gap={"10px"}
            >
              {donations.map((el, i) => {
                return (
                  <Checkbox>
                    <input type="checkbox" />
                    <CheckboxLabel>{el}</CheckboxLabel>
                  </Checkbox>
                );
              })}
            </Stack>
          </InputSection>
          <InputSection>
            <Label></Label>
            <Stack direction={"row"} gap={"10px"}>
              <GreenButtonSmall>Save</GreenButtonSmall>
              <BlueButtonSmall onClick={() => setViewForm(false)}>
                Cancel
              </BlueButtonSmall>
            </Stack>
          </InputSection>
        </InnerContainerHeadSection>
      </InnerContainer>
    </ModalContainer>
  );
}
