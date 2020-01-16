import React, { useState, useEffect, useCallback } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { addDictionary } from "../actions";
import { getDictionaryNames } from "../selectors";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  addIcon: {
    marginRight: theme.spacing(1)
  }
}));

const useDialog = (submit, validate) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = event => {
    setValue(event.target.value);
  };

  const handleSubmit = () => {
    setError(validate(name.trim()));
    setSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting && !error) {
      submit();
    }
  }, [error]);

  return {
    handleChange,
    handleSubmit,
    value,
    error
  };
};

function DialogFab({ heading, contentText, submit, validate }) {
  const { value, error } = useDialog(handleSubmit);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  const isUniqueDictionaryName = name => !dictionaryNames.contains(name);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSubmitting(false);
    setError(null);
    setName("");
  };

  const submit = useCallback(() => {
    addDictionary(name.trim());
    handleClose();
  }, [name, addDictionary]);

  const validate = name => {
    let error = "";
    if (!name) {
      error = "Name must not be blank.";
    } else if (!isUniqueDictionaryName(name)) {
      error = "That name is already taken. Please use a unique name.";
    }
    return error;
  };

  return (
    <div className={classes.root}>
      <Fab color="primary" variant="extended" onClick={handleClickOpen}>
        <AddIcon className={classes.addIcon} />
        {heading}
      </Fab>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{heading}</DialogTitle>
        <DialogContent>
          <DialogContentText>{contentText}</DialogContentText>
          <TextField
            required
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            value={name}
            onChange={handleChange}
            error={!!error}
            helperText={error}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DialogFab.propTypes = {
  addDictionary: PropTypes.func.isRequired,
  dictionaryNames: ImmutablePropTypes.listOf(PropTypes.string).isRequired
};

export default connect(
  state => ({
    dictionaryNames: getDictionaryNames(state)
  }),
  dispatch => ({
    addDictionary: name => dispatch(addDictionary(name))
  })
)(DialogFab);
