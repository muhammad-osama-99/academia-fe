import { useState } from "react";
import { Sidebar, Menu, MenuItem,useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography} from "@mui/material";
import { Link } from "react-router-dom";


import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";





const Sidebarr = () => {
  
 
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  useProSidebar();
const toggle = () => {
  toggleSidebar();
  if (toggled) {
    console.log(true);
    collapseSidebar();
  } else {
    console.log(false);
    collapseSidebar();
  }
};
  return (
    <Box
    >
      <Sidebar rtl={false} collapseSidebar={toggled} >
        <Menu iconShape="square" >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => {
            toggle();
          }}
            icon={toggled ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: "gray",
             
            }}
          >
            {!toggled && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h4" color={"grey"} >
                  ADMINIS
                </Typography>
                <IconButton onClick={() => {
            toggle();
          }}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!toggled && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`../../assets/user.png`}
                  style={{ cursor: "pointer", borderRadius: "50%"}}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={"black"}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Osama
                </Typography>
                <Typography variant="p" color={"green"}>
                  Academic
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={toggled ? undefined : "10%"}>
            <MenuItem
              title="Profile"
              color={"grey"}
              component={<Link to="/dashboard/profile" />}
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >Profile</MenuItem>

            <Typography
              variant="h6"
              color={"grey"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              View
            </Typography>
            <MenuItem
              title="View Opportunities"
              component={<Link to="/dashboard/opportunities" />}
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >View Opportunities</MenuItem>
            <MenuItem
              title="View Project/Idea"
              component={<Link to="/dashboard/projectidea" />}
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >View Project/Idea</MenuItem>
            <MenuItem
              title="Applied"
              component={<Link to="/dashboard/applied" />}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >Applied</MenuItem>
 <MenuItem
              title="My Post"
              component={<Link to="/dashboard/myposts" />}
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >My Post</MenuItem>
            <Typography
              variant="h6"
              color={"grey"}
              style={{
               
                color: "grey",
              }}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Upload Post
            </Typography>
            <MenuItem
              title="Oppotunities"
              component={<Link to="/dashboard/opportunities/post" />}
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >Opportunities</MenuItem>
            <MenuItem
              title="Project/Idea"
              component={<Link to="/dashboard/projectidea/post" />}
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >Project/Idea</MenuItem>
          

            <Typography
              variant="h6"
              color={"grey"}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Security
            </Typography>
            <MenuItem
              title="User List"
              component={<Link to="/dashboard/userlist" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >User List</MenuItem>
            <MenuItem
              title="New User"
              component={<Link to="/dashboard/user/add" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >New User</MenuItem>
            <MenuItem
              title="View Profile"
              component={<Link to="/dashboard/profile/view" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >Other Profile</MenuItem>
            <MenuItem
              title="Recover Password"
              component={<Link to="/dashboard/recover_password" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              style={{
               
                color: "black",
              }}
            >Recover Password</MenuItem>
            <MenuItem
              title="Log Out"
              component={<Link to="/dashboard/logout" />}
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
              
              style={{
               marginBottom:"100px",
                color: "black",
              }}
            >Log Out</MenuItem>
             
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default Sidebarr;
