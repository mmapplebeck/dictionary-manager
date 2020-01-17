import React, { useState, useEffect, useCallback } from "react";
import ImmutablePropTypes from "react-immutable-proptypes";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { connect } from "react-redux";

import Dialog from "./Dialog";
import { addDictionary } from "../actions";
import { getDictionaryNames } from "../selectors";

function AddDictionaryButton({ addDictionary, dictionaryNames }) {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [open, setOpen] = useState(false);

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
    <>
      <Tooltip title="Add" aria-label="add">
        <IconButton onClick={handleClickOpen}>
          <AddBoxIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        title="Add Dictionary"
        description="Once you create your new dictionary, you will be able to add items
        to it."
        content={
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
        }
        actions={
          <>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleSubmit} color="primary">
              Create
            </Button>
          </>
        }
        open={open}
        onClose={handleClose}
      />
    </>
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
