import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import clsx from "clsx";
import PropTypes from "prop-types";
import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import styled from "@emotion/styled";

const useStyles = makeStyles({
  root: {},
  toolbar: {
    height: 100,
    boxShadow: "0 1px 6px 0 rgba(49, 53, 59, 0.4)",
  },
});

const NavBarItemWrapper = ({ children, active }) => {
  const Wrapper = styled.div`
    height: 100px;
    background: ${active ? "rgba(0, 0, 0, 0.12)" : ""};
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    color: black;
    align-items: center;
  `;

  return <Wrapper>{children}</Wrapper>;
};

const RoutesWrapper = styled.div`
  cursor: pointer;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
const TopBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <AppBar className={clsx(classes.root, className)} elevation={0} {...rest}>
      <Toolbar className={classes.toolbar}>
        <Box
          style={{ width: "100%", height: "100%" }}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <div style={{ cursor: "pointer" }} onClick={() => navigation("/")}>
            <img
              style={{ height: "70px" }}
              alt="Catch'Em"
              src="/static/images/main_icon.png"
            ></img>
          </div>
          <RoutesWrapper
            style={{ cursor: "pointer" }}
            onClick={() => navigation("/my-pokemon-list")}
          >
            <NavBarItemWrapper
              active={location.pathname === "/my-pokemon-list"}
            >
              <img
                style={{ height: "72px" }}
                alt="My Pokemon"
                src="/static/images/Bag_16:9.png"
              ></img>
              <div style={{ fontWeight: "bold" }}>MY POKEMONS</div>
            </NavBarItemWrapper>
          </RoutesWrapper>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};

export default TopBar;
