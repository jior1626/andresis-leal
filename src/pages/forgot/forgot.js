import React, {
  Fragment,
  useState,
  useCallback,
  useEffect,
  useContext,
} from "react";
import { Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";
import Card from "@material-ui/core/Card";
import SimpleDivider from "../../components/Dividers/SimpleDivider";
import TextInput from "../../components/Inputs/TextInput";
import BaseButton from "../../components/Buttons/BaseButton";
// import { ForgotPasswordAPI } from "../../API/UserAPI";
import _get from "lodash/get";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';

const logoFlame = require("../../assets/images/andreis_logo.jpeg");

var sectionStyle = {
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  backgroundImage: `linear-gradient(rgb(245 123 19 / 60%), rgb(245 123 19 / 60%)), url(${require("./../../assets/images/fondo-forgot.jpeg")})`,
};

const forgotSchema = yup.object({
  username: yup
    .string()
    .trim()
    .lowercase()
    .email("Debes ingresar un correo válido")
    .required("Ingresa un correo"),
});

const ForgotPassword = (props) => {
  const { location = null } = props;

  const initialUsername = _get(location, "state.username", "");

  // * STATE HOOKS
  const [username, setUsername] = useState(initialUsername);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({
    username: null,
  });
  const [canSubmit, setCanSubmit] = useState(false);

  // * OTHER HOOKS
  const classes = useStyles();

  // * FUNCTIONS
  useEffect(() => {
    if (!username) {
      setCanSubmit(false);
      return;
    }

    try {
      forgotSchema.validateSync({ username });
      setErrors({});
      setCanSubmit(true);
    } catch (err) {
      setCanSubmit(false);
      setErrors({
        [err.path]: err.errors[0],
      });
    }
  }, [username]);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      // setLoading(true);
      // const { success } = await ForgotPasswordAPI(username);
      // if (!success) {
      //   setAlert({
      //     type: "error",
      //     message: "Ocurrió un error, intenta de nuevo",
      //   });
      //   setLoading(false);
      //   return;
      // }

      // setAlert({
      //   type: "info",
      //   message: "Hemos enviado un enlace a tu correo",
      // });

      // setLoading(false);
      window.location.replace('/new-password')
    },
    // [username, setAlert]
  );

  const onChangeUsername = useCallback((event) => {
    setUsername(event.target.value);
  }, []);

  return (
    <Fragment>
      <div className={classes.root} style={sectionStyle}>
        <Container maxWidth="md" className={classes.container}>
          <Card className={classes.mainCard}>
            <div className={classes.formContainer}>
              <img
                src={logoFlame}
                alt={"flame"}
                className={classes.imageSmall}
              />
              <Typography className={classes.title}>
                {" "}
                Reestablecer contraseña{" "}
              </Typography>
              <Typography className={classes.h5}>
                Ingresa tus credenciales
              </Typography>

              <form className={classes.form} onSubmit={handleSubmit}>
                <label className={classes.label}>Correo electrónico</label>
                <TextField
                  className={classes.TextInput}
                  size="small"
                  value={username}
                  onChange={onChangeUsername}
                  margin="none"
                  id="email"
                  type="email"
                  error={Boolean(errors.username)}
                  required={true}
                  autoComplete="off"
                  fullWidth
                />

                <Button
                  loading={loading}
                  className={classes.button}
                  disabled={!canSubmit}
                  fullWidth
                  id="login"
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Enviar confirmacion
                </Button>
              </form>
            </div>
          </Card>
        </Container>
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
    backgroundColor: theme.palette.background.cardDark,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      minHeight: "100%",
    },
  },
  label: {
    fontSize: 14,
    color: "#818181",
  },
  mainCard: {
    maxHeight: 560,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
    width: 400,
    borderRadius: 6,
    boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.1)",
    padding: 30,
  },
  imageSmall: {
    cursor: "pointer",
    width: 200,
  },
  formContainer: {
    maxWidth: "80%",
    height: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
  },
  title: {
    marginTop: 16,
    fontSize: 20,
    color: "#252733",
    fontWeight: "bold",
  },
  googleIcon: {
    marginRight: 5,
  },
  facebookIcon: {
    marginRight: 5,
    color: "currentColor",
    fontSize: 20,
  },
  facebookButton: {
    marginTop: theme.spacing(3),
  },
  logindivider: {
    marginTop: 20,
    marginBottom: 20,
    width: "100%",
  },
  TextInput: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    paddingTop: 10,
    border: "1px solid #C4C4C4",
    borderRadius: 6,
    "&:hover": {},
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "flex-end",
    cursor: "pointer",
    paddingTop: 8,
    fontSize: 14,
    color: "#818181",
    "&:hover": {
      color: theme.palette.text.main,
    },
  },
  button: {
    marginTop: theme.spacing(4),
    backgroundColor: "#26294B",
    borderRadius: 20,
    textTransform: "none",
  },
  googleButton: {
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: "center",
  },
  form: {
    maxWidth: "100%",
  },
  bottomText: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    fontSize: 14,
    textAlign: "center",
  },
  signUp: {
    fontSize: 14,
    color: theme.palette.primary.dark,
    fontWeight: 500,
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  link: {
    color: "#424242",
    fontWeight: 500,
  },
  h5: {
    fontSize: 14,
    color: "#818181",
    marginBottom: theme.spacing(2),
  },
}));

export default ForgotPassword;
