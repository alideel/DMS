/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import PreviewIcon from "@mui/icons-material/Preview";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

import { Link } from "react-router-dom";

export default function data() {
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "sequence", accessor: "sequence", align: "center" },
      { Header: "Name Of File", accessor: "nameOfFile", align: "left" },
      { Header: "uploaded by", accessor: "uploadedBy", align: "left" },
      { Header: "type", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "date", accessor: "date", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: [
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            acounting document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        uploadedBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <Link to="/dashboard">
              <IconButton sx={{ paddingInline: 0.5 }}>
                <EditIcon fontSize="small" />
              </IconButton>
            </Link>
            <Link to="/showFileInfo">
              <IconButton sx={{ paddingInline: 0.5 }}>
                <PreviewIcon fontSize="small" />
              </IconButton>
            </Link>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            management document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            deployment doc
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        uploadedBy: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            avatar
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            react component
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            material ui
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        uploadedBy: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            acounting document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        uploadedBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            management document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            deployment doc
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        uploadedBy: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            avatar
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            react component
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            material ui
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        uploadedBy: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            acounting document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        uploadedBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            management document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            deployment doc
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        uploadedBy: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            avatar
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            react component
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            material ui
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        uploadedBy: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            acounting document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        uploadedBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            management document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            deployment doc
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        uploadedBy: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            avatar
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            react component
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            material ui
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        uploadedBy: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            acounting document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            1
          </MDTypography>
        ),
        uploadedBy: <Author image={team2} name="John Michael" email="john@creative-tim.com" />,
        function: <Job title="Manager" description="Organization" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            management document
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            2
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Alexa Liras" email="alexa@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            11/01/19
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            deployment doc
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            3
          </MDTypography>
        ),
        uploadedBy: (
          <Author image={team4} name="Laurent Perrier" email="laurent@creative-tim.com" />
        ),
        function: <Job title="Executive" description="Projects" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            19/09/17
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            avatar
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            4
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Michael Levi" email="michael@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            24/12/08
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            react component
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            5
          </MDTypography>
        ),
        uploadedBy: <Author image={team3} name="Richard Gran" email="richard@creative-tim.com" />,
        function: <Job title="Manager" description="Executive" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            04/10/21
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
      {
        nameOfFile: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            material ui
          </MDTypography>
        ),
        sequence: (
          <MDTypography component="p" variant="caption" color="text" fontWeight="medium">
            6
          </MDTypography>
        ),
        uploadedBy: <Author image={team4} name="Miriam Eric" email="miriam@creative-tim.com" />,
        function: <Job title="Programator" description="Developer" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="offline" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
        date: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            14/09/20
          </MDTypography>
        ),
        action: (
          <Stack direction="row">
            <IconButton sx={{ paddingInline: 0.5 }}>
              <DeleteForeverIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <EditIcon fontSize="small" />
            </IconButton>
            <IconButton sx={{ paddingInline: 0.5 }}>
              <PreviewIcon fontSize="small" />
            </IconButton>
          </Stack>
        ),
      },
    ],
  };
}
