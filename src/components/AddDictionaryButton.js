import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addDictionary } from "../actions";

function AddDictionaryButton({ addDictionary }) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
    setError(validate(name));
    setSubmitting(true);
  };

  useEffect(() => {
    if (!error && submitting) {
      submit();
    }
  }, [error]);

  function submit() {
    addDictionary(name);
    handleClose();
  }

  function validate() {
    let error = "";
    if (!name) {
      error = "Name must not be blank.";
    }
    return error;
  }

  return (
    <div>
      <ListItem button onClick={handleClickOpen}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="Add Dictionary" />
      </ListItem>
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
  addDictionary: PropTypes.func.isRequired
};

export default connect(null, dispatch => ({
  addDictionary: name => dispatch(addDictionary(name))
}))(AddDictionaryButton);
