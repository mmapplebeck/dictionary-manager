import React, { useState } from "react";
import PropTypes from "prop-types";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";
import Tooltip from "@material-ui/core/Tooltip";
import { connect } from "react-redux";

import Dialog from "./Dialog";
import { deleteDictionary } from "../actions";

function DeleteDictionaryButton({ name, deleteDictionary }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    deleteDictionary();
    handleClose();
  };

  return (
    <>
      <Tooltip title="Delete" aria-label="delete">
        <IconButton onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        title={`Are you sure you want to delete ${name} dictionary?`}
        description="You will lose all items in this dictionary."
        actions={
          <>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleDelete} color="primary">
              Delete
            </Button>
          </>
        }
        open={open}
        onClose={handleClose}
      />
    </>
  );
}

DeleteDictionaryButton.propTypes = {
  name: PropTypes.string.isRequired,
  deleteDictionary: PropTypes.func.isRequired
};

export default connect(null, (dispatch, { name }) => ({
  deleteDictionary: () => dispatch(deleteDictionary(name))
}))(DeleteDictionaryButton);
