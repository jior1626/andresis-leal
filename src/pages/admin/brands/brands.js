import React, { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Typography
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";

const location = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);

const BrandsAdmin = () => {
  
  const classes = useStyles();

  const columns = [
    { field: "MIS MARCAS", headerName: "MIS MARCAS", sortable: true,flex: 1 },
    { field: "ACCION", headerName: "ACCION", minWidth: 200 }
  ];

  return (
    <>
       <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography className={classes.title}>Marcas</Typography>
          </Breadcrumbs>
          <button type='button' className={classes.ButtonStyle} >
            <span className={classes.TextButtonHeader}>Nueva marca</span> 
          </button>
        </div>
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
  ButtonStyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    gap: '10px',
    position: 'absolute',
    width: '194px',
    height: '46px',
    top: '5%',
    left: '75%',
    background: '#FF841F',
    borderRadius: '30px',
    borderStyle: 'none'
  },
  TextButtonHeader: {
    width: '113px',
    height: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '16px',
    lineHeight: '20px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
    flex: 'none',
    order: 0,
    flexGrow: 0,
  },
}));

export default BrandsAdmin;
