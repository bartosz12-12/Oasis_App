import styled from "styled-components";
import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmCheckout({ resourceName, onConfirm, disabled, onClose }) {
  function handleConfirm() {
    onConfirm();
    onClose();
  }

  return (
    <StyledConfirmDelete>
      <Heading as="h3">Check-Out {resourceName}</Heading>
      <p>Are you sure you want to check-out</p>

      <div>
        <Button variation="secondary" disabled={disabled} onClick={onClose}>
          Cancel
        </Button>
        <Button variation="danger" disabled={disabled} onClick={handleConfirm}>
          Check-out
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmCheckout;
