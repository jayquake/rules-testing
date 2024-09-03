import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";
import ArticleIcon from "@mui/icons-material/Article";
import AnimationIcon from "@mui/icons-material/Animation";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import NavigationIcon from "@mui/icons-material/Navigation";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import ViewCarouselIcon from "@mui/icons-material/ViewCarousel";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton
      button
      component={Link}
      to={{
        pathname: "/Carousels"
      }}
    >
      <ListItemIcon>
        <ViewCarouselIcon />
      </ListItemIcon>
      <ListItemText primary="Carousels" />
    </ListItemButton>
    <ListItemButton
      button
      component={Link}
      to={{
        pathname: "/Clickables"
      }}
    >
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Clickables" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Context" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ArticleIcon />
      </ListItemIcon>
      <ListItemText primary="Document" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Errors" />
    </ListItemButton>
    <ListItemButton button component={Link} to={{ pathname: "/Forms" }}>
      <ListItemIcon>
        <BorderColorIcon />
      </ListItemIcon>
      <ListItemText primary="Forms" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AnimationIcon />
      </ListItemIcon>
      <ListItemText primary="Graphics" />
    </ListItemButton>
    <ListItemButton
      button
      component={Link}
      to={{
        pathname: "/Keyboard"
      }}
    >
      <ListItemIcon>
        <KeyboardIcon />
      </ListItemIcon>
      <ListItemText primary="Keyboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <NavigationIcon />
      </ListItemIcon>
      <ListItemText primary="Navigation" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoStoriesIcon />
      </ListItemIcon>
      <ListItemText primary="Readability" />
    </ListItemButton>
    <ListItemButton button component={Link} to="/Tables">
      <ListItemIcon>
        <BackupTableIcon />
      </ListItemIcon>

      <ListItemText primary="Tables" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Information
    </ListSubheader>
    <ListItemButton button component={Link} to={{ pathname: "/Rules" }}>
      <ListItemIcon>
        <BookmarkIcon />
      </ListItemIcon>
      <ListItemText primary="Rules" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BookmarkIcon />
      </ListItemIcon>
      <ListItemText primary="Page Scanner" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BookmarkIcon />
      </ListItemIcon>
      <ListItemText
        primary="HTML Testing"
        button
        component={Link}
        to={{
          pathname: "/HTML_Elements"
        }}
      />
    </ListItemButton>
  </React.Fragment>
);
