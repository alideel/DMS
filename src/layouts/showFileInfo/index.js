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
import { Paper, Typography } from "@mui/material";
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
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import Box from "@mui/material/Box";
import FileForm from "../../myComponents/FileForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  "&:focus-visible": {
    outline: "none",
  },
  boxShadow: 0,
  padding: "0px",
};

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

function ShowFileInfo() {
  // eslint-disable-next-line react/function-component-definition, react/no-unstable-nested-components, react/prop-types
  const FileDetails = ({ image, name, email }) => {
    const [controller] = useMaterialUIController();
    const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
      <>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          component="div"
        >
          <Box sx={style}>
            <FileForm />
          </Box>
        </Modal>
        <Paper sx={{ padding: 4 }}>
          <Grid container>
            <Grid item md={7} lg={8}>
              <MDBox>
                <Typography
                  variant="h4"
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                  mb={3}
                >
                  <InsertDriveFileIcon fontSize="large" />
                  {name}
                </Typography>
                <Grid container columnSpacing={4} rowSpacing={2}>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      الوصف
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      يتعلق هذا الملف بكل مت يخص تدريب الموظفين من اجازات عمل و غيرها
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      النوع
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      صادر
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      الرقم التعريفي للملف
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      7823748
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      رقم الخزن
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      تدقيق 3
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      تاريخ الأدخال
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      3/4/23
                    </Typography>
                  </Grid>
                  <Grid item md={6} lg={3}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      تاريخ الملف
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      3/4/23
                    </Typography>
                  </Grid>
                  <Grid item md={6} lg={3}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      مرسل الى
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      3/4/23
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      ملاحظات
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      يتعلق هذا الملف بكل مت يخص تدريب الموظفين من اجازات عمل و غيرها
                    </Typography>
                  </Grid>
                  <Grid item md={6}>
                    <Typography variant="h6" sx={{ color: blue[400] }}>
                      الجهة المصدرة للملف
                    </Typography>
                    <Typography variant="body1" lineHeight={1}>
                      وزارة العدل
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
                <Typography variant="h6">تذكير</Typography>
                <MDButton variant="text" sx={{ padding: 1 }}>
                  <MDBox display="flex" alignItems="center" lineHeight={1} gap={1}>
                    <AddCircleOutlinedIcon />
                    <Typography variant="body2" fontWeight="regular" component="span">
                      أضافة تذكير
                    </Typography>
                  </MDBox>
                </MDButton>
                <Typography variant="h6">Share</Typography>
                <MDButton variant="text" sx={{ padding: 1 }}>
                  <MDBox display="flex" alignItems="center" lineHeight={1} gap={1}>
                    <ShareIcon />
                    <Typography variant="body2" fontWeight="regular" component="span">
                      مشاركة الملف
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
                onClick={handleOpen}
              >
                <Typography variant="body1" component="span">
                  تعديل او تغيير الملف
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
                  رفع نسخة جديدة من الملف
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
                  عرض مخطط التصدير
                </Typography>
                <OpenInNewIcon />
              </MDBox>
            </Grid>
          </Grid>
        </Paper>
      </>
    );
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            </Grid>
          </MDBox>
        </MDBox>
      </DashboardLayout>
    </LocalizationProvider>
  );
}

export default ShowFileInfo;
