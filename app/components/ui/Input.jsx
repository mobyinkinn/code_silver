import styled from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export const DateInput = styled.input`
  width: 200px;
  font-size: large;
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  box-shadow: var(--shadow-sm);
`;

export const InputCheck = styled.input`
  border: 1px solid var(--color-grey-300);
  background-color: var(--color-grey-0);
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  width: fit-content;
`;

export default Input;
