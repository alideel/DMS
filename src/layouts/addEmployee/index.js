/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
// import { useState } from "react";
// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/addDepartment/data/authorsTableData";
// import projectsTableData from "layouts/addDepartment/data/projectsTableData";

import MDInput from "components/MDInput";
import { Box, Paper, Typography } from "@mui/material";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import Typography from "@mui/material/Typography";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
// import FormHelperText from "@mui/material/FormHelperText";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
// import departmentImg from "assets/images/new/department.jpg";
import MDButton from "components/MDButton";

function AddEmployee() {
  const { columns, rows } = authorsTableData();
  // const { columns: pColumns, rows: pRows } = projectsTableData();
  // const [value, setValue] = useState(new Date("2014-08-18T21:11:54"));

  // const handleChange = (newValue) => {
  //   setValue(newValue);
  // };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DashboardLayout>
        <DashboardNavbar />
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Paper sx={{ padding: 4, width: "100%" }}>
                <Typography variant="h5" component="div" gutterBottom>
                  Add New Employee
                </Typography>
                <Grid container columnSpacing={4} rowSpacing={4}>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="first-name" label="First Name" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="middle-name" label="Middle Name" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="last-name" label="Last Name" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput
                      id="employee-department"
                      label="Department Of Employee"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="employee-email" label="Email" variant="standard" fullWidth />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="employee-password" label="password" variant="standard" fullWidth />
                  </Grid>

                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput
                      id="re-employee-password"
                      label="re type password"
                      variant="standard"
                      fullWidth
                    />
                  </Grid>
                  <Box sx={{ width: "100%" }} />
                  <Grid item>
                    <MDButton variant="gradient" color="info">
                      Add
                    </MDButton>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Employees
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns, rows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
            {/* <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Projects Table
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: pColumns, rows: pRows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid> */}
          </Grid>
        </MDBox>
      </DashboardLayout>
    </LocalizationProvider>
  );
}

export default AddEmployee;
