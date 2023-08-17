import React from "react";
import { HamburgerButton } from "./Hamburger.styles";
import HamburgerIcon from "../../images/menu-icon.svg"

const Hamburger = ({ HandleOverlayMenu }) => (
    <HamburgerButton onClick={handleOverlayMenu}>
        <img src={HamburgerIcon} alt="menu-hamburger" />
    </HamburgerButton>
)

export default Hamburger