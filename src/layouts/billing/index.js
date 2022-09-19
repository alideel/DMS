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

// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Billing page components
import PaymentMethod from "layouts/billing/components/PaymentMethod";
import Invoices from "layouts/billing/components/Invoices";
import BillingInformation from "layouts/billing/components/BillingInformation";
import Transactions from "layouts/billing/components/Transactions";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import ShareIcon from "@mui/icons-material/Share";
import { Typography } from "@mui/material";
import MDButton from "components/MDButton";
import { useMaterialUIController } from "context";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { blue } from "@mui/material/colors";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
// function gText(theme, ownerState) {
//   const { palette, functions } = theme;
//   const { white, transparent, dark, grey, gradients } = palette;
//   const { sidenavColor } = ownerState;
//   const { pxToRem, rgba, linearGradient } = functions;

//   return {
//     bgColor: transparent.main,
//     color: gradients[sidenavColor].state,
//     margin: `${pxToRem(20)} ${pxToRem(0)}`,
//   };
// }
function coloringBtn(theme, ownerState) {
  const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
  const { active, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = ownerState;

  const { white, transparent, dark, grey, gradients } = palette;
  const { md } = boxShadows;
  const { borderRadius } = borders;
  const { pxToRem, rgba, linearGradient } = functions;

  return {
    background: active
      ? linearGradient(gradients[sidenavColor].main, gradients[sidenavColor].state)
      : transparent.main,
    color:
      (transparentSidenav && !darkMode && !active) || (whiteSidenav && !active)
        ? dark.main
        : white.main,
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: `${pxToRem(8)} ${pxToRem(10)}`,
    margin: `${pxToRem(8)} ${pxToRem(0)}`,
    gap: `${pxToRem(12)}`,
    borderRadius: borderRadius.md,
    cursor: "pointer",
    userSelect: "none",
    whiteSpace: "nowrap",
    boxShadow: active && !whiteSidenav && !darkMode && !transparentSidenav ? md : "none",
    [breakpoints.up("xl")]: {
      transition: transitions.create(["box-shadow", "background-color"], {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),
    },

    "&:hover, &:focus": {
      backgroundColor: () => {
        let backgroundValue;

        if (!active) {
          backgroundValue =
            transparentSidenav && !darkMode
              ? grey[300]
              : rgba(whiteSidenav ? grey[400] : white.main, 0.2);
        }

        return backgroundValue;
      },
    },
  };
}

function Billing() {
  // eslint-disable-next-line react/function-component-definition, react/no-unstable-nested-components, react/prop-types
  const FileDetails = ({ image, name, email }) => {
    const [controller] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    return (
      <Grid container>
        <Grid item md={7} lg={8}>
          <MDBox>
            <Typography variant="h4" sx={{ display: "flex", alignItems: "center", gap: 1 }} mb={3}>
              <InsertDriveFileIcon fontSize="large" />
              {name}
            </Typography>
            <Grid container columnSpacing={4} rowSpacing={2}>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  Description
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  Statement of checking the current month&apos;s data
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  Type
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  export
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  File Id
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  7823748
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  Storage Number
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  3
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  Entry Date
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  3/4/23
                </Typography>
              </Grid>
              <Grid item md={6} lg={3}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  File History
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  3/4/23
                </Typography>
              </Grid>
              <Grid item md={6} lg={3}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  Sent To
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  3/4/23
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  Notes
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, praesentium?
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Typography variant="h6" sx={{ color: blue[400] }}>
                  The Issuer Of The File
                </Typography>
                <Typography variant="body1" lineHeight={1}>
                  Lorem ipsum dolor sit.
                </Typography>
              </Grid>
            </Grid>
          </MDBox>
        </Grid>
        <Grid item sm={12} md={5} lg={4}>
          <MDBox
            sx={{
              height: 200,
              borderRadius: 2,
              bgcolor: (theme) => theme.palette.grey[300],
            }}
            p={2}
          >
            <Typography variant="h6">Remind</Typography>
            <MDButton variant="text" sx={{ padding: 1 }}>
              <MDBox display="flex" alignItems="center" lineHeight={1} gap={1}>
                <AddCircleOutlinedIcon />
                <Typography variant="body2" fontWeight="regular" component="span">
                  Add Remind
                </Typography>
              </MDBox>
            </MDButton>
            <Typography variant="h6">Share</Typography>
            <MDButton variant="text" sx={{ padding: 1 }}>
              <MDBox display="flex" alignItems="center" lineHeight={1} gap={1}>
                <ShareIcon />
                <Typography variant="body2" fontWeight="regular" component="span">
                  Share To ...
                </Typography>
              </MDBox>
            </MDButton>
          </MDBox>
          <MDBox
            sx={(theme) =>
              coloringBtn(theme, {
                active: true,
                transparentSidenav,
                whiteSidenav,
                darkMode,
                sidenavColor,
              })
            }
          >
            <Typography variant="body1" component="span">
              Upload New Copy Of File
            </Typography>
            <CloudUploadIcon />
          </MDBox>
          <MDBox
            sx={(theme) =>
              coloringBtn(theme, {
                active: true,
                transparentSidenav,
                whiteSidenav,
                darkMode,
                sidenavColor,
              })
            }
          >
            <Typography variant="body1" component="span">
              View Export Chart
            </Typography>
            <OpenInNewIcon />
          </MDBox>
        </Grid>
      </Grid>
    );
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mt={8}>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FileDetails name="employess-details" />
            </Grid>
            <Grid item md={12}>
              <Invoices />
            </Grid>
            <Grid item xs={12} lg={8}>
              <Grid container spacing={3}>
                <Grid item xs={12} xl={6}>
                  <MasterCard number={4562112245947852} holder="jack peterson" expires="11/22" />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="salary"
                    description="Belong Interactive"
                    value="+$2000"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="paypal"
                    title="paypal"
                    description="Freelance Payment"
                    value="$455.00"
                  />
                </Grid>
                <Grid item xs={12}>
                  <PaymentMethod />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </MDBox>
        <MDBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={7}>
              <BillingInformation />
            </Grid>
            <Grid item xs={12} md={5}>
              <Transactions />
            </Grid>
          </Grid>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
