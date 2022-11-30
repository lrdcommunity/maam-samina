import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Quali from "../Qualification/quali";
import Interest from "../interest/interest";
import "./portfoilo.css";

const Portfolio = () => {
  return (
    <div className="portfoilo"  id="Portfolio">
      <Tabs>
        <TabList style={{ display: "flex", marginBottom: "30px" }}>
          <h2>Portfolio</h2>
          <Tab>Qualification</Tab>
          <Tab>Research Interest</Tab>
          <Tab>Projects</Tab>
        </TabList>

        <TabPanel>
          <Quali />
        </TabPanel>
        <TabPanel>
          <Interest />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Portfolio;
