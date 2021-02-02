import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import styled from "@emotion/styled";

const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 64px;
  box-shadow: 0 1px 6px 0 rgba(49, 53, 59, 0.4);
  background: white;
`;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavBarItemWrapper = ({ children, active }) => {
  const Wrapper = styled.div`
    height: 30px;
    background: ${active ? "rgba(0, 0, 0, 0.4)" : ""};
    display: flex;
    flex-direction: column;
    padding: 0 30px;
    color: ${active ? "white" : "black"};
    align-items: center;
    justify-content: center;
    font-size: 14px;
    height: 100%;
  `;

  return <Wrapper>{children}</Wrapper>;
};

const RoutesWrapper = styled.div`
  cursor: pointer;
  height: 100%;
  :hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Footer = ({ className, ...rest }) => {
  const navigation = useNavigate();
  const location = useLocation();

  return (
    <FooterWrapper>
      <FooterContent>
        <RoutesWrapper
          style={{ cursor: "pointer" }}
          onClick={() => navigation("/")}
        >
          <NavBarItemWrapper active={location.pathname === "/"}>
            <img
              style={{ height: "32px" }}
              alt="Catch'Em"
              src="/static/images/compasx64.png"
            ></img>
            <div style={{ fontWeight: "bold", marginTop: 5 }}>EXPLORE</div>
          </NavBarItemWrapper>
        </RoutesWrapper>
        <RoutesWrapper
          style={{ cursor: "pointer" }}
          onClick={() => navigation("/my-pokemon-list")}
        >
          <NavBarItemWrapper active={location.pathname === "/my-pokemon-list"}>
            <img
              style={{ height: "32px" }}
              alt="My Pokemon"
              src="/static/images/Bagx64.png"
            ></img>
            <div style={{ fontWeight: "bold", marginTop: 5 }}>MY POKEMONS</div>
          </NavBarItemWrapper>
        </RoutesWrapper>
      </FooterContent>
    </FooterWrapper>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
