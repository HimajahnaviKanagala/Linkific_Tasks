import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

export function Tabs({ children }) {
  const [active, setActive] = useState(0);

  return (
    <TabsContext.Provider value={{ active, setActive }}>
      {children}
    </TabsContext.Provider>
  );
}

export function TabList({ children }) {
  return <div>{children}</div>;
}

export function Tab({ index, children }) {
  const { setActive } = useContext(TabsContext);
  return <button onClick={() => setActive(index)}>{children}</button>;
}

export function TabPanel({ index, children }) {
  const { active } = useContext(TabsContext);
  return active === index ? <div>{children}</div> : null;
}
