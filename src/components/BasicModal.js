import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText
} from "@mui/material";

import Grow from '@mui/material/Grow';

export default function BasicModal({
  isDialogOpened,
  handleCloseDialog,
  title,
  opening_crawl
}) {
  const [maxWidth] = React.useState("sm");

  const handleClose = () => {
    handleCloseDialog(false);
  };

  return (
    <div>
      <Dialog
        transition={Grow}
        maxWidth={maxWidth}
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {opening_crawl}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
