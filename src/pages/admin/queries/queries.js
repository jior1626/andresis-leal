import React, { useState, useEffect, useRef } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
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

const QueriesAdmin = () => {
  const classes = useStyles();

  const columns = [
    { field: "MARCA", headerName: "MARCA", sortable: true, flex: 1 },
    { field: "FECHA VENCIMIENTO", headerName: "FECHA VENCIMIENTO", minWidth: 200 },
    { field: "CODIGO", headerName: "CODIGO", minWidth: 150 },
    { field: "NOMBRE DEL PRODUCTO", headerName: "NOMBRE DEL PRODUCTO", sortable: true, flex: 1 },
    { field: "ACCIONES", headerName: "ACCIONES", minWidth: 100, sortable: false },
  ];

  return (
    <>
      <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Typography className={classes.title}>Consultas</Typography>
          </Breadcrumbs>
          
        </div>
       
      </Card>
      <Card variant="outlined" sx={{ height: '30%', marginBottom: '20px', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
        <div className="row">
        <div className="col-4">
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
          <div className="col-4">
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
          <div className="col-4">
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
          
        </div>
        <div className={`row ${classes.row}`}>
          <div className="col-4">
          <span className="title-2">Codigo producto</span>
              <TextField
                className={classes.TextInput}
                size="small"
                // value={username}
                // onChange={onChangeUsername}
                margin="none"
                id="email"
                type="text"
                // error={Boolean(errors.username)}
                required={true}
                autoComplete="off"
                fullWidth
              />
          </div>
          <div className="col-4">
          <span className="title-2">Nombre del producto</span>
              <TextField
                className={classes.TextInput}
                size="small"
                // value={username}
                // onChange={onChangeUsername}
                margin="none"
                id="email"
                type="text"
                // error={Boolean(errors.username)}
                required={true}
                autoComplete="off"
                fullWidth
              />
          </div>
          <div className='col-3'>
            <button type='button' className={classes.ButtonFilter}>Filtrar</button>
          </div>
        </div>
      </Card>

      <Card variant="outlined" sx={{ height: '50%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
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
  row: {
    marginTop: 20
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
    border: '1px solid #26294B',
    borderRadius: '30px',
    top: '39%'
  },
}));

export default QueriesAdmin;
