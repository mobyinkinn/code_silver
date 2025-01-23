/* eslint-disable no-unused-vars */

import React from "react";
// import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-100);
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  padding: 0.2rem;
  display: flex;
  gap: 0.2rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-0);
  border: none;

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-brand-600);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-600);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, filter, setFilter, options }) {
  // const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = filter || options.at(0).value;
  // const currentFilter = options.at(0).value;
  function handleClick(value) {
    setFilter(value);
  }
  return (
    <StyledFilter>
      {options.map((option, i) => (
        <FilterButton
          onClick={() => handleClick(option.value)}
          key={i}
          active={option.value === currentFilter}
          disabled={option.value === currentFilter}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;