import React, { useState, useEffect, useRef, useCallback } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Typography
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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

const RecordsAdmin = () => {
  const [open, setOpen] = useState(0);
  const classes = useStyles();

  const columns = [
    { field: "ID", headerName: "ID", sortable: true },
    { field: "NOMBRE SOLICITUD", headerName: "NOMBRE SOLICITUD", sortable: true, flex: 1 },
    { field: "ACCION", headerName: "ACCION", minWidth: 200 }
  ];

  const handleClick = async (event) => {
      console.log(event);
      setOpen(event)
    }

  return (
    <>
       <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography className={classes.title}>Registros</Typography>
        </Breadcrumbs>
      </Card>

      {open === 0?(
        <Card variant="outlined" className={classes.card} sx={{ height: '80%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
          <span className={classes.subTitle}>{'(5)'} Solicitudes realizadas</span>
          <div className={classes.cardContent} onClick={() => handleClick(1)}>
            <div className={classes.cardLogo}>
              
            </div>
            <span className={classes.cardText}>Versace</span>
          </div>
        </Card>
      ):open === 1? (
        <>
          <Card variant="outlined" sx={{ 
              height: '80%', 
              marginRight: '15px', 
              marginLeft: '15px' , 
              padding: 5, 
              borderRadius: 3, 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            
            <div className="row">
              <div className="col-12">
                <span className={classes.subTitle}>{'(8)'} Carpetas</span>
              </div>
            </div>
            <div className={classes.cardContent} onClick={() => handleClick(2)}>
              <div className={classes.cardLogo}>
                
              </div>
              <span className={classes.cardText}>Versace</span>
            </div>
            
           
            <div className="row">
              <div className="col-12" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button type='button' className={classes.ButtonStyle} onClick={() => handleClick(0)}>
                  <span className={classes.TextButtonHeader}>Volver al listado</span> 
                </button>
              </div>
            </div>
          </Card>
          
        </>
      ):open === 2? (
        <>
          
          <Card variant="outlined" sx={{ height: '80%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
            <span className={classes.subTitle}>{'(5)'} Solicitudes realizadas</span>
            <div style={{ height: '80%', width: "100%", paddingTop: "20px" }}>
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
            <div className="row">
              <div className="col-12" style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button type='button' className={classes.ButtonStyle} onClick={() => handleClick(1)}>
                  <span className={classes.TextButtonHeader}>Volver al listado</span> 
                </button>
              </div>
            </div>
          </Card>
        </>
      ):false}
      
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
  card: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  cardContent: {
    position: 'absolute',
    width: '161px',
    height: '155px',
    background: '#F9FAFB',
    borderRadius: '5px',
    background: '#F9FAFB',
    top: '30%',
    cursor: 'pointer'
  },
  cardLogo: {
    position: 'absolute',
    height: '83px',
    top: '31px',
    left: '30px',
    width: '87px',
    background: '#FFFFFF',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  cardText: {
    fontStyle: 'normal',
    fontWeight: 600,
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    color: '#818181',
    position: 'absolute',
    width: '52px',
    height: '18px',
    top: '80%',
    left: '30%',
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
    background: '#FF841F',
    borderRadius: '30px',
    borderStyle: 'none',top: '85%'
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

export default RecordsAdmin;
