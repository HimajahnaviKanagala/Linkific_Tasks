import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme.cardBg};
  margin: 10px 0;
`;

export default function Card({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
