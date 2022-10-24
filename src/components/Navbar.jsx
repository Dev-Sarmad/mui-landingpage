import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
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
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
          <AppBar sx={{background:'black'}}>
        <Toolbar>
          <SailingIcon />
          <Typography variant="h5"> The-Illustrations</Typography>
          {isMatch ? (
            <DrawerComp />
          ) : (
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
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      </>

  );
}

export default Navbar;
