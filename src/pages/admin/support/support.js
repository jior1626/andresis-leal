import React, { useState, useEffect, 
  useCallback, } from "react";
import {
  Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";


const SupportAdmin = () => {

  const classes = useStyles();

  
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
    },
    []
  );

  return (
    <>
       <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Typography className={classes.title}>Soporte</Typography>
        </Breadcrumbs>
      </Card>
     
        <Card variant="outlined" sx={{ height: '80%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
          <form className={classes.form} onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <span className="title-2">Asunto</span>
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
                  <div className="col-12" style={{marginTop: 20}}>
                    <span className="">Adjuntar archivos (10 Mb Max)</span>
                    <button type='button' className={classes.ButtonStyle} >
                      <span className={classes.TextButtonHeader}>Adjuntar</span> 
                    </button>
                    <span className={classes.nameDocument}>Documento.PDF  X</span>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <div className="row">
                  <div className="col-12">
                    <span className="title-2">Descripcion</span>
                    <TextField
                      lassName={classes.TextInput}
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
                      multiline
                      rows={6}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
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
  form: {
    maxWidth: "100%",
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
    borderStyle: 'none',
    marginTop: 10
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
  nameDocument: {
    top: '43%',
    left: '25%',
    position: 'absolute',
  }
}));

export default SupportAdmin;
