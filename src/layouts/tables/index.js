/* eslint-disable react/jsx-props-no-spreading */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// import DataTable from "examples/Tables/DataTable";

// Data
// import authorsTableData from "layouts/tables/data/authorsTableData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// import MDInput from "components/MDInput";
// import { Paper, TextField } from "@mui/material";
// import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
// import Typography from "@mui/material/Typography";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import NativeSelect from "@mui/material/NativeSelect";
// import FormHelperText from "@mui/material/FormHelperText";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import FileForm from "../../myComponents/FileForm";
// import Uploader from "../../myComponents/Uploader";

function Tables() {
  // const { columns, rows } = authorsTableData();
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
              {/* <Paper sx={{ width: 1200, padding: 4 }}>
                <Typography variant="h5" component="div" gutterBottom>
                  رفع ملف جديد
                </Typography>
                <Grid container columnSpacing={4} rowSpacing={4}>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="file-name" label="أسم الملف" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput
                      id="fil-id"
                      label="الرقم التعريفي للملف"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <FormControl fullWidth>
                      <InputLabel variant="standard" htmlFor="file-type-selection">
                        نوع الملف
                      </InputLabel>
                      <NativeSelect
                        defaultValue={30}
                        inputProps={{
                          name: "file-type",
                          id: "file-type-selection",
                        }}
                      >
                        <option value={10}>صادر</option>
                        <option value={20}>وارد</option>
                        <option value={30}>مهم</option>
                      </NativeSelect>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="send-to" label="مرسل الى" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="out-number" label="رقم الصادر" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <DesktopDatePicker
                      label="تاريخ الملف"
                      inputFormat="MM/dd/yyyy"
                      value={value}
                      sx={{ width: "100% !important" }}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} fullWidth />}
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput
                      id="issuer-of-file"
                      label="الجهة المصدرة للملف"
                      fullWidth
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={12} md={6} lg={4}>
                    <MDInput id="department-of-file" label="القسم" fullWidth variant="standard" />
                  </Grid>
                  <Grid item xs={12}>
                    <MDInput
                      id="description-of-file"
                      label="الوصف"
                      fullWidth
                      variant="standard"
                      multiline
                      rows={3}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Uploader />
                  </Grid>
                </Grid>
              </Paper> */}
              <FileForm />
            </Grid>
          </Grid>
        </MDBox>
      </DashboardLayout>
    </LocalizationProvider>
  );
}

export default Tables;
