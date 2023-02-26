import React, {useCallback} from "react";
import { Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import { esES } from "@mui/material/locale";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
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

const FormRequests = () => {
  const classes = useStyles();

  const columns = [
    { field: "COD. PRODUCTO", headerName: "COD. DEL PRODUCTO", minWidth: 150, sortable: true,flex: 1 },
    { field: "NOMBRE PRODUCTO", headerName: "NOMBRE DEL PRODUCTO", minWidth: 200, sortable: true,flex: 1 },
    { field: "MARCA", headerName: "MARCA", minWidth: 200, sortable: true,flex: 1 },
    { field: "ACCIONES", headerName: "ACCIONES", minWidth: 200 }
  ];

  return (
    <>

      <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1, padding: '20px', }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <Breadcrumbs aria-label="breadcrumb">
              <Typography className={classes.title}>Crear nueva solicitud</Typography>
            </Breadcrumbs>
            <span className={classes.subTitle}>Rellenar los siguientes campos para validar tu solicitud</span>
          </div>
            <button type='button' className={classes.ButtonNew} >
              <span className={classes.TextButtonHeader}>Guardar solicitud</span> 
            </button>
          </div>
      </Card>
      <Card variant="outlined" sx={{ height: '35%', marginBottom: '20px', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
      <div className="row">
        <div className="col-6" style={{ borderRight: '2px solid #C4C4C4'}}>
          <div className="row">
            <div className="col-6" >
                <span className="title-2">Codigo del producto</span>
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
            <div className="col-6">
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
          </div>
          <div className={`row ${classes.row}`}>
            <div className="col-6">
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
            <div className='col-3'>
            <button type='button' className={classes.ButtonAdd}>Agregar</button>
          </div>
          </div>
        </div>
        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <span className="title-3">Adjuntar archivos (10Mb máx)</span>
            </div>
            <div className="col-12">
              <button type='button' className={classes.ButtonToAttach}>
                <span className={classes.TextButtonHeader}>Adjuntar</span> 
                </button>
            </div>
          </div>
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
  subTitle: {
    fontSize: '16px !important',
    color: '#818181',
  },
  TextInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingTop: 10,
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    "&:hover": {},
  },
  ButtonNew: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    gap: '10px',
    position: 'absolute',
    width: '200px',
    height: '46px',
    top: '5%',
    left: '75%',
    background: '#FF841F',
    borderRadius: '30px',
    borderStyle: 'none'
  },
  TextButtonHeader: {
    width: '125px',
    height: '20px',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '20px',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFFFFF',
  },
  row: {
    marginTop: 20
  },
  ButtonAdd: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    gap: '10px',
    position: 'absolute',
    width: '153px',
    height: '35px',
    top: '40%',
    left: '30%',
    border: '1px solid #FF841F',
    borderRadius: '30px',
  },
  ButtonToAttach: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 20px',
    gap: '10px',
    position: 'absolute',
    width: '153px',
    height: '35px',
    background: '#FF841F',
    borderRadius: '30px',
    borderStyle: 'none'
  },
}));

export default FormRequests;
