import React, { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {Typography} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import { esES } from "@mui/material/locale";
import { makeStyles } from "@material-ui/core/styles";

const location = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);

const NotificationAdmin = () => {
  const classes = useStyles();

  const columns = [
    { field: "NOMBRE DEL CORREO", headerName: "NOMBRE DEL CORREO", sortable: true,flex: 1 },
    { field: "FECHA VENCIMIENTO", headerName: "FECHA VENCIMIENTO", minWidth: 250 },
    { field: "# REGISTRO", headerName: "# REGISTRO", minWidth: 250 }
  ];
  
  return (
    <>
       <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography className={classes.title}>Notificaciones</Typography>
        </Breadcrumbs>
      </Card>

     
        <Card variant="outlined" sx={{ height: '80%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
        <div style={{ height: '100%', width: "100%", paddingTop: "20px" }}>
            {/* Table List Request */}
            <ThemeProvider theme={location}>
              <DataGrid
                rows={[]}
                columns={columns}
                pageSize={5}
                initialState={{
                  sorting: {
                    sortModel: [
                      {
                        field: "id",
                        sort: "desc",
                      },
                    ],
                  },
                }}
              />
            </ThemeProvider>
          </div>
        </Card>
     
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '20px !important',
    color: '#252733',
    fontWeight: "bold !important"
  },
  subTitle: {
    fontSize: '16px !important',
    color: '#818181',
  },
}));

export default NotificationAdmin;
