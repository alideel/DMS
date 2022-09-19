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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
// import SignUp from "layouts/authentication/sign-up";
import AddDepartment from "layouts/addDepartment";
import AddEmployee from "layouts/addEmployee";
import AddTypes from "layouts/addTypes";
import Files from "layouts/files";
import ShowFileInfo from "layouts/showFileInfo";
// @mui icons
import Icon from "@mui/material/Icon";

import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ArchiveIcon from "@mui/icons-material/Archive";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const routes = [
  {
    type: "collapse",
    name: "لوحة التحكم",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },

  // { type: "title", title: "المستندات", key: "Documents" },

  {
    type: "collapse",
    name: "مستند جديد",
    key: "tables",
    icon: <NoteAddIcon fontSize="small" />,
    route: "/tables",
    component: <Tables />,
  },

  {
    type: "collapse",
    name: "الأرشيف",
    key: "files",
    icon: <ArchiveIcon fontSize="small" />,
    route: "/files",
    component: <Files />,
  },

  // { type: "title", title: "Department", key: "DepartmentKey" },

  {
    type: "collapse",
    name: "الأقسام",
    key: "Department",
    icon: <DynamicFeedIcon fontSize="small" />,
    route: "/Department",
    component: <AddDepartment />,
  },

  // { type: "title", title: "Document Types", key: "TypesKey" },

  {
    type: "collapse",
    name: "أضافة نوع كتاب",
    key: "Types",
    icon: <FileCopyIcon fontSize="small" />,
    route: "/Types",
    component: <AddTypes />,
  },

  // { type: "title", title: "Employee", key: "EmployeeKey" },

  {
    type: "collapse",
    name: "أضافة موضف",
    key: "Employee",
    icon: <PeopleAltIcon fontSize="small" />,
    route: "/Employee",
    component: <AddEmployee />,
  },

  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "showFileInfo",
    key: "showFileInfo",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/showFileInfo",
    component: <ShowFileInfo />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/authentication/sign-in",
    component: <SignIn />,
  },
];

export default routes;
