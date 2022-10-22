import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  Tabs,
  Tab,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";
import DrawerComp from "./DrawerComp";

function Navbar() {
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar>
          <SailingIcon />
          <Typography variant="h5">sarmad Occean</Typography>
          {
            isMatch ? (
              <DrawerComp />
            ):(
              <>
                        <Tabs variant="fullWidth">
            <Tab sx={{ color: "white" }} label="Home" href="/drafts" />
            <Tab sx={{ color: "white" }} label="Services" href="/trash" />
            <Tab sx={{ color: "white" }} label="AboutUS" href="/spam" />
          </Tabs>
          <Button
            sx={{ marginLeft: "auto" }}
            variant="contained"
            color="success"
          >
            {" "}
            login
          </Button>
          <Button sx={{ margin: "10px" }} variant="contained" color="info">
            {" "}
            login
          </Button>
              </>
            )
          }

        </Toolbar>
        
      </AppBar>
    </div>
  );
}

export default Navbar;
