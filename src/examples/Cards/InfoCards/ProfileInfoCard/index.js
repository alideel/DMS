/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-console */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
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

// react-routers components
// import { Link } from "react-router-dom";

// prop-types is library for typechecking of props
import { useState, useEffect } from "react";
import * as React from "react";
import PropTypes from "prop-types";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

// import Tooltip from "@mui/material/Tooltip";
// import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import Button from "@mui/material/Button";
// Material Dashboard 2 React base styles
// import colors from "assets/theme/base/colors";
// import typography from "assets/theme/base/typography";
import MDInput from "components/MDInput";
import useAxiosPrivate from "../../../../hooks/useAxiosPrivate";
import useAuth from "../../../../hooks/useAuth";

function ProfileInfoCard({ shadow }) {
  const axiosPrivate = useAxiosPrivate();
  const [file, setFile] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [labels, setLabels] = useState([
    "القسم",
    "البريد الألكتروني",
    "الأسم الأول",
    "الأسم الثاني",
    "الأسم الثالث",
  ]);
  const [errMsg, setErrMsg] = useState("");
  const [values, setValues] = useState([]);
  const { auth, setAuth } = useAuth();

  const handleChange = async () => {
    const FirstName = values[2];
    const SecondName = values[3];
    const ThirdName = values[4];
    const ImageFile = "";
    const formData = new FormData();
    formData.append("FirstName", FirstName);
    formData.append("SecondName", SecondName);
    formData.append("ThirdName", ThirdName);
    formData.append("ImageFile", file);
    try {
      await axiosPrivate.post("/Profile", formData);
    } catch (err) {
      console.log(err);
      setErrMsg("Change Failed");
    }
  };
  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUserInfo = async () => {
      try {
        const response = await axiosPrivate.get("/Profile", {
          signal: controller.signal,
        });

        isMounted &&
          setValues([
            response.data.department,
            response.data.email,
            response.data.firstName,
            response.data.secondeName,
            response.data.thirdName,
          ]);
        setAuth({ ...auth, profile: response.data });
      } catch (err) {
        console.error(err);
        // navigate("/login", { state: { from: location }, replace: true });
      }
    };

    getUserInfo();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  useEffect(() => {
    console.log("File has been set.");
  }, [file]);

  const renderItems = labels.map((label, key) => (
    <MDBox key={label} display="flex" py={1} pr={2}>
      <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
        {label} : &nbsp;
      </MDTypography>
      <MDTypography variant="button" fontWeight="regular" color="text">
        &nbsp; {values[key]}
      </MDTypography>
    </MDBox>
  ));
  const renderItemsEdit = labels.map((label, key) => (
    <React.Fragment key={label}>
      <Grid item xs={6}>
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          <MDInput
            id="department-name"
            label={label}
            fullWidth
            variant="standard"
            value={values[key]}
            onChange={(e) => {
              const newValue = [...values.slice(0, key), e.target.value, ...values.slice(key + 1)];
              setValues(newValue);
            }}
          />
        </MDTypography>
      </Grid>
      {key == values.length - 1 && (
        <Grid item xs={6}>
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            <MDButton variant="outlined" color="info" component="label">
              تغيير الصورة الشخصية
              <input type="file" hidden onChange={(e) => setFile(e.target.files[0])} value={""} />
            </MDButton>
          </MDTypography>
        </Grid>
      )}
    </React.Fragment>
  ));

  // Render the card social media icons
  // const renderSocial = social.map(({ link, icon, color }) => (
  //   <MDBox
  //     key={color}
  //     component="a"
  //     href={link}
  //     target="_blank"
  //     rel="noreferrer"
  //     fontSize={size.lg}
  //     color={socialMediaColors[color].main}
  //     pr={1}
  //     pl={0.5}
  //     lineHeight={1}
  //   >
  //     {icon}
  //   </MDBox>
  // ));

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title">تغيير معلومات الحساب الشخصي</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" sx={{ marginTop: 2 }}>
            <Grid container rowSpacing={4} columnSpacing={4}>
              {renderItemsEdit}
            </Grid>
          </DialogContentText>
          {errMsg}
        </DialogContent>
        <DialogActions>
          <MDButton variant="gradient" color="info" onClick={handleChange}>
            تغيير
          </MDButton>
          <MDButton variant="gradient" color="info" onClick={handleClose} autoFocus>
            الغاء
          </MDButton>
        </DialogActions>
      </Dialog>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          {title}
        </MDTypography>
        <MDTypography component={Link} to={action.route} variant="body2" color="secondary">
          <Tooltip title={action.tooltip} placement="top">
            <Icon>edit</Icon>
          </Tooltip>
        </MDTypography>
      </MDBox> */}
      <MDBox px={2}>
        {/* <MDBox mb={2} lineHeight={1}>
          <MDTypography variant="button" color="text" fontWeight="light">
            {description}
          </MDTypography>
        </MDBox> */}
        {renderItems}
        <MDBox>
          <MDButton variant="gradient" color="info" sx={{ marginTop: 4 }} onClick={handleClickOpen}>
            تغيير المعلومات
          </MDButton>
          {/* <MDBox display="flex" py={1} pr={2}>
            <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
              social: &nbsp;
            </MDTypography>
          </MDBox> */}
        </MDBox>
      </MDBox>
    </Card>
  );
}

// Setting default props for the ProfileInfoCard
ProfileInfoCard.defaultProps = {
  shadow: true,
};

// Typechecking props for the ProfileInfoCard
ProfileInfoCard.propTypes = {
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // info: PropTypes.objectOf(PropTypes.string).isRequired,
  // social: PropTypes.arrayOf(PropTypes.object).isRequired,
  action: PropTypes.shape({
    route: PropTypes.string.isRequired,
    tooltip: PropTypes.string.isRequired,
  }).isRequired,
  shadow: PropTypes.bool,
};

export default ProfileInfoCard;
