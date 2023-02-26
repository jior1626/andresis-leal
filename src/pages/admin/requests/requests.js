import React, { useState, useEffect, useRef,
  useCallback, } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { esES } from "@mui/material/locale";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const location = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  esES
);


const RequestsAdmin = () => {

  const classes = useStyles();

  const columns = [
    { field: "COD. CASO", headerName: "COD. CASO",minWidth: 150, sortable: true,flex: 1 },
    { field: "COD. PRODUCTO", headerName: "COD. PRODUCTO", minWidth: 150, sortable: true,flex: 1 },
    { field: "NOMBRE PRODUCTO", headerName: "NOMBRE PRODUCTO", minWidth: 200, sortable: true,flex: 1 },
    { field: "MARCA", headerName: "MARCA", minWidth: 200, sortable: true,flex: 1 },
    { field: "FECHA SOLICITUD", headerName: "FECHA SOLICITUD", minWidth: 150, sortable: true,flex: 1 },
    { field: "ESTADO", headerName: "ESTADO", minWidth: 150, sortable: true,flex: 1 },
    { field: "ACCION", headerName: "ACCION", minWidth: 200 }
  ];

  const onClickNew = useCallback((event) => {
    window.location.replace('/admin/form-requests')
  }, []);

  return (
    <>

      <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography className={classes.title}>Solicitudes</Typography>
          </Breadcrumbs>
          <button type='button' className={classes.ButtonStyle} onClick={onClickNew}>
            <span className={classes.TextButtonHeader}>Nueva solicitud</span> 
          </button>
        </div>
       
      </Card>
      <Card variant="outlined" sx={{ height: '35%', marginBottom: '20px', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
        <div className="row">
          <div className="col-3">
            <label className={classes.label}>Fecha inicial</label>
              <TextField
                className={classes.TextInput}
                size="small"
                // value={username}
                // onChange={onChangeUsername}
                margin="none"
                id="email"
                type="date"
                // error={Boolean(errors.username)}
                required={true}
                autoComplete="off"
                fullWidth
              />
          </div>
          <div className="col-3">
              <span className="title-2">Fecha Final</span>
              <TextField
                className={classes.TextInput}
                size="small"
                // value={username}
                // onChange={onChangeUsername}
                margin="none"
                id="email"
                type="date"
                // error={Boolean(errors.username)}
                required={true}
                autoComplete="off"
                fullWidth
              />
          </div>
          <div className="col-3">
            <span className="title-3">Marca</span>
            <Select
              id="request-type"
              size="small"
              value={''}
              name="RequestType"
              // onChange={handleChange}
              label="Marca"
              fullWidth
              inputProps={{ readOnly: true }}
            >
              <MenuItem value={"SE"}>
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value={"SI"}>
                Solicitud de informacion
              </MenuItem>
             
            </Select>
          </div>
        </div>
        <div className={`row ${classes.row}`}>
          <div className="col-3">
            <span className="title-3">Estado</span>
            <Select
              id="request-type"
              size="small"
              value={''}
              name="RequestType"
              // onChange={handleChange}
              label="Marca"
              fullWidth
              inputProps={{ readOnly: true }}
            >
              <MenuItem value={"SE"}>
                <em>Seleccionar</em>
              </MenuItem>
              <MenuItem value={"SI"}>
                Solicitud de informacion
              </MenuItem>
          
            </Select>
          </div>
          <div className='col-3'>
            <button type='button' className={classes.ButtonFilter}>Filtrar</button>
          </div>
        </div>
      </Card>

      <Card variant="outlined" sx={{ height: '45%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
        <div style={{ height: '100%', width: "100%", paddingTop: "20px", zoom: '0.80' }}>
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
  TextInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingTop: 10,
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    "&:hover": {},
  },
  ButtonFilter: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignitems: 'center',
    padding: '10px 20px',
    gap: '10px',
    position: 'absolute',
    width: '169px',
    height: '39px',
    top: '255px',
    left: '315px',
    border: '1px solid #26294B',
    borderRadius: '30px',
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
  row: {
    marginTop: 20
  }
}));

export default RequestsAdmin;
