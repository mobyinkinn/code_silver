/* eslint-disable no-unused-vars */
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1rem;
    padding: 0.7rem 1.4rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled(({ size, variation, ...props }) => <button {...props} />)`
  cursor: pointer;
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-md);

  ${({ size = "medium" }) => sizes[size]}
  ${({ variation = "primary" }) => variations[variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
export default Button;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: -1rem;
  right: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-grey-500);

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    /* Sometimes we need both */
    /* fill: var(--color-grey-500);
    stroke: var(--color-grey-500); */
    color: var(--color-grey-500);
  }
`;

export { IconButton };
