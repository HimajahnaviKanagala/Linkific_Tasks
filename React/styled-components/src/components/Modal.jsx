import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;
const Content = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${(props) => props.theme.cardBg};
  color: ${(props) => props.theme.text};
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
`;

export default function Modal({ show, children }) {
  if (!show) return null;

  return (
    <>
      <Overlay />
      <Content>{children}</Content>
    </>
  );
}
