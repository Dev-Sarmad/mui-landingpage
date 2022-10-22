import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const nav = ["Home","Services","AboutUs"];
function DrawerComp() {
  const [openDrawer, setDrawer] = useState(false);

  return (
    <div>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <List>
        {
            nav.map((page,id)=>(
                <ListItemButton key={id}>
                <ListItemIcon >
                  <ListItemText>{page}</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            ))
        }
        </List>
      </Drawer>
      <IconButton
      sx={{marginLeft:"30rem", color:'white'}}
        onClick={() => {
          setDrawer(!openDrawer);
        }}
      >
        <MenuIcon />
      </IconButton>
    </div>
  );
}

export default DrawerComp;
