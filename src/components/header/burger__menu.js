import React, { useState } from "react";
import styled from "styled-components";
import HeaderMenu from "./menu";

const Burger = styled.div`
  z-index: ${({ open }) => (open ? "2" : "1")};
  div {
    &:not(:last-child) {
      margin-bottom: 5px;
    }
    &:nth-child(1) {
      transform: ${({ open }) =>
        open ? "rotate(45deg) translateX(10px)" : "rotate(0deg) translateX(0)"};
      background-color: ${({ open }) => (open ? "#ffffff" : "#3078bc")};
    }
    &:nth-child(2) {
      transform: ${({ open }) =>
        open ? "translateX(-100%)" : "translateX(0)"};
      opacity: ${({ open }) => (open ? "0" : "1")};
    }
    &:nth-child(3) {
      transform: ${({ open }) =>
        open
          ? "rotate(-45deg) translateX(10px)"
          : "rotate(0deg) translateX(0)"};
      background-color: ${({ open }) => (open ? "#ffffff" : "#3078bc")};
    }
  }
  @media (min-width: 900px) {
    display: none;
  }
`;

function BurgerMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="menu__wrapper">
      <Burger
        className="burger__menu"
        open={open}
        onClick={() => setOpen(!open)}
      >
        <div></div>
        <div></div>
        <div></div>
      </Burger>
      <HeaderMenu open={open} />
    </div>
  );
}

export default BurgerMenu;
