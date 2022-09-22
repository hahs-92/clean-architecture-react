import { SubjectManager } from "@/models";
import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Subscription } from "rxjs";

export interface CustomDialogInterface {
  children: React.ReactNode;
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomDialog: React.FC<CustomDialogInterface> = ({ children }) => {
  const [open, setOpen] = useState(false);
  let openSubject$ = new Subscription();
  let closeSubject$ = new Subscription();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleExit = () => {
    dialogCloseSubject$.setSubject = false;
  };

  useEffect(() => {
    openSubject$ = dialogOpenSubject$.getSubject.subscribe(() =>
      handleClickOpen()
    );
    closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() =>
      handleClose()
    );

    return () => {
      openSubject$.unsubscribe();
      closeSubject$.unsubscribe();
    };
  }, []);

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleExit()}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {children}
      </Dialog>
    </div>
  );
};

export default CustomDialog;
