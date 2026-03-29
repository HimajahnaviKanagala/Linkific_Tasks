import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/GlobalStyles";

import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import Modal from "./components/Modal";

function App() {
  const [dark, setDark] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div style={{ padding: "20px" }}>
        <h1>Styled Componnets</h1>
        <Button onClick={() => setDark(!dark)}>Toggle Theme</Button>

        <Card>
          <Button variant="primary">Primary</Button>{" "}
          <Button variant="danger">Danger</Button> <Button>Default</Button>
        </Card>

        <Card>
          <Input placeholder="Enter Text...." />
        </Card>

        <Card>
          <Button onClick={() => setShowModal(true)}>Open Modal</Button>
        </Card>

        <Modal show={showModal}>
          <h2>Hello Modal</h2>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Modal>
      </div>
    </ThemeProvider>
  );
}
export default App;
