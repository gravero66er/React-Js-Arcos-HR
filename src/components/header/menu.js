import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const Menu = styled.div`
  right: ${({ open }) => (open ? "0" : "-280px")};
`;

const settings = {
  spy: true,
  smooth: true,
  offset: -120,
  duration: 800,
};

function HeaderMenu({ open }) {
  return (
    <Menu className="header__menu" open={open}>
      <Link
        activeсlass="active"
        to="about"
        {...settings}
        className="menu__item menu__item-header"
      >
        О нас
      </Link>
      <Link
        activeсlass="active"
        to="cult"
        {...settings}
        className="menu__item menu__item-header"
      >
        Культура
      </Link>
      <Link
        activeсlass="active"
        to="ment"
        {...settings}
        className="menu__item menu__item-header"
      >
        Менторы
      </Link>
      <Link
        activeсlass="active"
        to="vac"
        {...settings}
        className="menu__item menu__item-header"
      >
        Вакансии
      </Link>
    </Menu>
  );
}

export default HeaderMenu;
