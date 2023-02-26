import React, {Fragment} from "react";
import Box from "@mui/material/Box";
import { styled, ThemeProvider, createTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import ArrowRight from "@mui/icons-material/ArrowRight";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Settings from "@mui/icons-material/Settings";
import People from "@mui/icons-material/People";
import Dns from "@mui/icons-material/Dns";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Dashboard from "@mui/icons-material/Dashboard";

import { Route, Switch, useRouteMatch } from "react-router-dom";
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import "./admin.css";

import RequestsAdmin from "./requests/requests";
import FormRequests from "./requests/form-requests";
import DashboardAdmin from "./dashboard/dashboard";
import UsersAdmin from "./users/users.admin";
import RecordsAdmin from "./records/records";
import QueriesAdmin from "./queries/queries";
import NotificationAdmin from "./notification/notification";
import BrandsAdmin from "./brands/brands";
import SupportAdmin from "./support/support";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router";

import { makeStyles } from "@material-ui/core/styles";

const logoFlame = require('../../assets/images/andreis_logo.jpeg');

const data = [
  { icon: <Dashboard />, label: "Inicio / Dashboard", href: `dashboard` },
  { icon: <CoPresentIcon />, label: "Solicitudes", href: `requests` },
  { icon: <People />, label: "Registros", href: `records` },
  { icon: <People />, label: "Consultas", href: `queries` },
  { icon: <People />, label: "Notificacion", href: `notification` },
  { icon: <People />, label: "Marcas", href: `brands` },
  { icon: <People />, label: "Soporte", href: `support` },
];

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});
const settings = ["Cerrar sesión"];

const Admin = ({ match }) => {
  const ulStyle = {};
  const [open, setOpen] = React.useState(true);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const { push } = useHistory();
  const classes = useStyles();

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (statu) => {
    setAnchorElUser(null);
    if (statu) {
      localStorage.removeItem("auth");
      push("/login");
    }
  };

  let { path } = useRouteMatch();

  return (
    <Fragment>
      <div className={classes.root}>
        <SidebarComponent id="default-sidebar">
          <Box sx={{ display: "flex", height: '100%' }}>
            <ThemeProvider
              theme={createTheme({
                components: {
                  MuiListItemButton: {
                    defaultProps: {
                      disableTouchRipple: true,
                    },
                  },
                },
                palette: {
                  mode: "dark",
                  primary: { main: "rgb(102, 157, 246)" },
                  background: { paper: "rgba(38, 41, 75, 1)" },
                },
              })}
            >
              <Paper elevation={0} >
                <FireNav component="nav" disablePadding>

                  <ListItemButton sx={{ height: 94, display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'white' }}>
                    <img src={logoFlame} alt={'flame'} className={classes.imageSmall} />
                  </ListItemButton>
                  <Divider />
                  <Box
                    sx={{
                      // bgcolor: open ? "rgba(71, 98, 130, 0.2)" : null,
                      pb: open ? 2 : 0,
                      height: '100%'
                    }}
                  >
                    <ListItemButton
                      alignItems="flex-start"
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        pt: 2.5,

                      }}
                    >
                      <ListItemText
                        primary="Distribeaute"
                        primaryTypographyProps={{
                          fontSize: 17,
                          fontWeight: "medium",
                          lineHeight: "20px",
                          mb: "5px",
                          display: 'flex',
                          alignContent: 'center',
                          alignItems: 'center',
                        }}
                        sx={{ my: 5 }}
                      />

                    </ListItemButton>
                    {data.map((item) => (
                      <ListItemButton
                        component="a"
                        key={item.label}
                        href={`${path}/${item.href}`}
                        sx={{
                          py: 0,
                          minHeight: 40,
                          color: "rgba(255,255,255,.8)",
                          "&:hover, &:focus": {
                            background: 'rgba(255, 132, 31, 1)',
                            marginRight: 3
                          }
                        }}
                      >
                        <ListItemIcon sx={{ color: "inherit" }}>
                          {item.icon}
                        </ListItemIcon>
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: 14,
                            fontWeight: "medium",
                          }}
                        />
                      </ListItemButton>
                    ))}
                  </Box>
                </FireNav>
              </Paper>
            </ThemeProvider>
          </Box>
        </SidebarComponent>
        <div style={{ padding: '0px 0px 10px', paddingTop: 0 , width: '100%' }}>
          <Switch>
            <Route exact path={path}>
              <Redirect to={`${path}/dashboard`} />
            </Route>
            <Route path={`${path}/dashboard`}>
              <DashboardAdmin />
            </Route>
            <Route path={`${path}/requests`}>
              <RequestsAdmin />
            </Route>
            <Route path={`${path}/form-requests`}>
              <FormRequests />
            </Route>
            <Route path={`${path}/records`}>
              <RecordsAdmin />
            </Route>
            <Route path={`${path}/queries`}>
              <QueriesAdmin />
            </Route>
            <Route path={`${path}/notification`}>
              <NotificationAdmin />
            </Route>
            <Route path={`${path}/brands`}>
              <BrandsAdmin />
            </Route>
            <Route path={`${path}/support`}>
              <SupportAdmin />
            </Route>
          </Switch>
        </div>
      </div>
    </Fragment>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative",
    flex: 1,
    overflowY: "auto",
    overflowX: "hidden",
    background: 'rgba(71, 98, 130, 0.2)',
    height: '100%',
  },
  imageSmall: {
    cursor: 'pointer',
    width: 200
  }
}));

export default Admin;
