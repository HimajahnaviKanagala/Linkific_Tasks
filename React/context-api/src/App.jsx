import Login from "./components/Login";
import ThemeToggle from "./components/ThemeToggle";
import Cart from "./components/Cart";
import { Tab, TabList, TabPanel, Tabs } from "./components/Tabs";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <ThemeToggle />
      <Cart />
      <div className="card">
        <h3>Information Tabs</h3>
        <Tabs>
        <TabList>
          <Tab index={0}>Profile</Tab>
          <Tab index={1}>Settings</Tab>
        </TabList>
        <TabPanel index={0}>User profile details go here.</TabPanel>
        <TabPanel index={1}>Adjust your preferences here.</TabPanel>
      </Tabs>
      </div>
    </div>
  );
}
export default App;
