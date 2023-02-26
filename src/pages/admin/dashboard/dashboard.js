import React, { useState, useEffect, useRef } from "react";
import {
  Typography
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import {
  AreaChart,
  Area,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  linearGradient,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    "name": "",
    "uv": 4000,
    "pv": 2400,
    "amt": 2400
  },
  {
    "name": "",
    "uv": 3000,
    "pv": 1398,
    "amt": 2210
  },
  {
    "name": "",
    "uv": 2000,
    "pv": 9800,
    "amt": 2290
  },
  {
    "name": "",
    "uv": 2780,
    "pv": 3908,
    "amt": 2000
  },
  {
    "name": "",
    "uv": 1890,
    "pv": 4800,
    "amt": 2181
  },
  {
    "name": "",
    "uv": 2390,
    "pv": 3800,
    "amt": 3000
  },
  {
    "name": "",
    "uv": 3490,
    "pv": 4300,
    "amt": 2100
  }
]


const DashboardAdmin = () => {

  const classes = useStyles();

  return (
    <>

      <Card variant="outlined" sx={{ width: "100%", height: '15%', marginBottom: '20px', padding: 5, borderRadius: 1 }}>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" disabled>
            Inicio
          </Link>
          <Typography className={classes.title}>Dashboard</Typography>
        </Breadcrumbs>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'flex-start', height: '15%', margin: '20px 15px 15px 20px', alingLeft: 'left' }}>
        <Card variant="outlined" sx={{ width: "25%", height: '100%', marginRight: '20px', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <span className={classes.item}>20</span>
          <span className={classes.subItem}>Regístros sanitarios vigentes</span>
        </Card>
        <Card variant="outlined" sx={{ width: "25%", height: '100%', marginRight: '20px', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <span className={classes.item}>60</span>
          <span className={classes.subItem}>Regístros en trámite</span>
        </Card>
        <Card variant="outlined" sx={{ width: "25%", height: '100%', borderRadius: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
          <span className={classes.item}>6</span>
          <span className={classes.subItem}>Solicitudes pendientes</span>
        </Card>
      </div>

      <Card variant="outlined" sx={{ height: '65%', marginRight: '15px', marginLeft: '15px' , padding: 5, borderRadius: 3 }}>
        
      <div className="row">
        <div className="col-7">
          <AreaChart width={600} height={350} data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
          </AreaChart>
        </div>
        <div className={`col-5 ${classes.cardItem}`}>
         <div className={classes.contentItem} style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start',}}>
           <span className={classes.subItem}>Renovaciones por año</span>
           <span style={{fontSize: 12, color: '#818181'}}>Gastos en renovaciones</span>
         </div>
         <div className={classes.alingCenter}>
         <span className={classes.subItem} style={{color: '#818181'}}>Renovaciones año 2022</span>
           <span style={{fontSize: 24, color: '#252733', fontWeight: 'bold'}}>200</span>
         </div>
         <div className={classes.alingCenter} >
         <span className={classes.subItem} style={{color: '#818181'}}>Renovaciones año 2021</span>
           <span style={{fontSize: 24, color: '#252733', fontWeight: 'bold'}}>350</span>
         </div>
        </div>
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
  item: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '50px',
    textAlign: 'center',
    letterSpacing: '1px',
    color: '#252733',
  },
  subItem: {
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    letterSpacing: '0.4px',
    color: '#414141',
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  contentItem: {
    
  },
  alingCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottom: '1px solid #e5e5e5',
    height: '35%'
  }
}));
export default DashboardAdmin;
