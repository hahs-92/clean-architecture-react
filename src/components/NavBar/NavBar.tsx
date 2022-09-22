import Favorite from "@mui/icons-material/Favorite";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import React from "react";
import { CustomDialog } from "../CustomDialog";
import { dialogOpenSubject$ } from "../CustomDialog/CustomDialog";
import { FavoriteTable } from "./FavoriteTable";

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable />
      </CustomDialog>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            React PG
          </Typography>
          <IconButton onClick={handleClick} aria-label="favorites">
            <Favorite color="secondary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
