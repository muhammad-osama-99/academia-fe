import React from 'react'
import '../dashboard/common.css';
import { useState } from "react";
import { useOutlet } from "react-router-dom";
import Topbar from "./dashboardPages/global/Topbar";
import Sidebarr from "./dashboardPages/global/Sidebar";
import { CssBaseline} from "@mui/material";

const Dashboard = () => {
    const outlet = useOutlet();
    const [isSidebar, setIsSidebar] = useState(true);
  return (
    
      <>
        <CssBaseline />
        <div className="app">
           
            <Sidebarr isSidebar={isSidebar} />
            
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            {outlet}
          </main>
        </div>
      </>
    
  )
}

export default Dashboard