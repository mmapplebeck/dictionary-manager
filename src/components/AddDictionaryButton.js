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
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";

import { addDictionary } from "../actions";
import { getDictionaryNames } from "../selectors";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  }
}));

function AddDictionaryButton({ addDictionary, dictionaryNames }) {
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

  const handleChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = () => {
    setError(validate(name.trim()));
    setSubmitting(true);
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

  useEffect(() => {
    if (!error && submitting) {
      submit();
    }
  }, [error, submit, submitting]);

  return (
    <div className={classes.root}>
      <Tooltip title="Add" aria-label="add">
        <IconButton onClick={handleClickOpen}>
          <AddBoxIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Dictionary</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Once you create your new dictionary, you will be able to add items
            to it.
          </DialogContentText>
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

AddDictionaryButton.propTypes = {
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
)(AddDictionaryButton);
