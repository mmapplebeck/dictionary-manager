import React from "react";
import PropTypes from "prop-types";
import MuiDialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function Dialog({ open, title, description, content, actions, onClose }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
      fullScreen={fullScreen}
    >
      <DialogTitle id="dialog-title">{title}</DialogTitle>
      {(content || description) && (
        <DialogContent id="dialog-description">
          {description && <DialogContentText>{description}</DialogContentText>}
          {content}
        </DialogContent>
      )}
      <DialogActions>{actions}</DialogActions>
    </MuiDialog>
  );
}

Dialog.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
  onClose: PropTypes.func.isRequired,
  description: PropTypes.string,
  content: PropTypes.node
};

export default Dialog;
