import "./App.css"; // Add this to import your custom styles
import React from "react";
import AddVehicle from "./add-vehicle/components/AddVehicle";
import { TabView, TabPanel } from "primereact/tabview";

const App: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <TabView className="custom-tabview text-left border-round-md	">
        <TabPanel header="Dodaj vozilo">
          <AddVehicle />
        </TabPanel>
        <TabPanel header="Izbriši vozilo">
          <div></div>
        </TabPanel>
      </TabView>
    </div>
  );
};

export default App;
