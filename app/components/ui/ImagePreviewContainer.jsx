import styled from "styled-components";

export const ImagePreviewContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 200px;
  margin-top: 1rem;

  & img {
    width: 100%;
    border-radius: var(--border-radius-sm);
  }

  & .edit-icon {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    padding: 0.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    &:hover {
      background: rgba(255, 255, 255, 1);
    }
  }
`;
