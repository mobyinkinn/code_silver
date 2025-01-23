import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function AnotherSelect() {
  return <StyledSelect></StyledSelect>;
}

export default AnotherSelect;
