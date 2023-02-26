import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const SimpleDivider = props => {
  const rootClasses = useStyles();
  const { classes, className, withoutMargin = false } = props;
  if (classes || className) {
    return (
      <hr
        className={`${classes || className} ${rootClasses.divider} ${
          withoutMargin ? '' : rootClasses.withMargin
        }`}
      />
    );
  }

  return (
    <hr
      className={` ${rootClasses.divider} ${
        withoutMargin ? '' : rootClasses.withMargin
      }`}
    />
  );
};

const useStyles = makeStyles(theme => ({
  divider: {
    display: 'block',
    width: '100%',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '#f5f5f5',
    backgroundColor: theme.palette.divider,
    margin: 0
  },
  withMargin: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3)
  }
}));

export default SimpleDivider;
