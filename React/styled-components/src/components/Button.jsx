import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;

  background: ${(props) =>
    props.variant === "primary"
      ? "#4f46e5"
      : props.variant === "danger"
        ? "#dc2626"
        : "#6b7280"};
  &:hover {
    opacity: 0.9;
  }
`;
export default function Button({ children, variant, ...props }) {
  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
