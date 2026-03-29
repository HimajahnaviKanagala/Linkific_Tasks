import styled from "styled-components";

const StyledInput = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 100%;
`;
export default function Input(props) {
  return <StyledInput {...props} />;
}
