import React from "react";
import useStyles from "./Style";
import { AppBar, Toolbar, Box } from "@material-ui/core";
import { Link } from "react-router-dom";
const MenuBar = () => {
  const classes = useStyles();
  const items = [
    "Editorial",
    "3D Renders",
    " Architecture & Interior",
    " Current Events",
    "Experimental",
    "Fashion",
    "Film",
    "Food & Drink",
    "Health & Wellness",
    "Nature",
    "People",
    "Street Photography",
  ];
  return (
    <>
      <div className={classes.toolbar} />
      <div className={classes.MenuBar}>
        <div className={classes.MenuItems}>
          <Link to="/" className = {classes.items}>{items[0]}</Link>
          <Link to="/" className = {classes.items}>{items[1]}</Link>
          <Link to="/" className = {classes.items}>{items[2]}</Link>
          <Link to="/" className = {classes.items}>{items[3]}</Link>
          <Link to="/" className = {classes.items}>{items[4]}</Link>
          <Link to="/" className = {classes.items}>{items[5]}</Link>
          <Link to="/" className = {classes.items}>{items[6]}</Link>
          <Link to="/" className = {classes.items}>{items[7]}</Link>
          <Link to="/" className = {classes.items}>{items[8]}</Link>
          <Link to="/" className = {classes.items}>{items[9]}</Link>
          <Link to="/" className = {classes.items}>{items[10]}</Link>
          <Link to="/" className = {classes.items}>{items[11]}</Link>
          <Link to="/" className = {classes.items}>{items[12]}</Link>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
