/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// prop-type is a library for typechecking of props
// eslint-disable-next-line no-unused-vars
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import * as React from "react";
import TextField from "@mui/material/TextField";
import MDInput from "components/MDInput";
// NewUser page components
// import FormField from "layouts/pages/users/new-user/components/FormField";

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };
// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }
function UserInfo({ formData }) {
  const { formField, values, errors, touched } = formData;
  const { doctitle } = formField;
  const { doctitle: doctitleV } = values;

  return (
    <MDBox>
      <MDBox lineHeight={0}>
        <MDTypography variant="h5">اضافة ملف</MDTypography>
      </MDBox>
      <MDBox mt={1.625}>
        <Grid container spacing={3} rowSpacing={5}>
          <Grid item xs={12} sm={3}>
            <MDInput
              type={doctitle.type}
              label={doctitle.label}
              name={doctitle.name}
              value={doctitleV}
              placeholder={doctitle.placeholder}
              error={errors.doctitle && touched.doctitle}
              success={doctitleV.length > 0 && !errors.doctitle}
              style={{ paddingTop: "10px" }}
            />
          </Grid>
        </Grid>
      </MDBox>
    </MDBox>
  );
}

// typechecking props for UserInfo
// UserInfo.propTypes = {
//   formData: PropTypes.oneOfType([PropTypes.object, PropTypes.func]).isRequired,
// };

export default UserInfo;
