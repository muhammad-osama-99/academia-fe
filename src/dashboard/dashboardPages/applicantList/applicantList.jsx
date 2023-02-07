import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../../data/mockData";
import Header from "../../../components/dashboardHeader/Header";


const ApplicantList = () => {
  

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },

  
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
        field: "comment",
        headerName: "Comments",
        flex: 1,
      },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
   
  ];

  return (
    <Box m="20px">
      <Header
        title="Applicant"
        subtitle="List of Applicant Profile"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: "green",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: "blue",
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: "grey",
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: "blue",
          },
          "& .MuiCheckbox-root": {
            color: `${"green"} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${"grey"} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default ApplicantList;
