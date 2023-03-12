import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
// images
import Logo from "../../assets/images/logo.png";
// constants
import { colors } from "../../constants/Colors";
import { CursorContext } from "../../context/Store";
// components
import MobileNav from "./MobileNav";
import Socials from "./Socials";
// icons
import { CgMenuRight } from "react-icons/cg";

function Header() {
    const [isHamburgerModal, setHamburgerModal] = useState(false);
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <MainContainer>
            <div className="header-wrapper">
                <Left>
                    <LogoContainer
                        to="/portfolio-website"
                        onMouseEnter={mouseEnterHandler}
                        onMouseLeave={mouseLeaveHandler}
                    >
                        <LogoBox>
                            <LogoImg src={Logo} alt="logo" />
                        </LogoBox>
                        <span>Varsha VT</span>
                    </LogoContainer>
                </Left>
                <Right>
                    <NavBar>
                        <NavItem
                            to="/portfolio-website"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            Home
                        </NavItem>
                        <NavItem
                            to="/about"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            About
                        </NavItem>
                        <NavItem
                            to="/works"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            Works
                        </NavItem>
                        <NavItem
                            to="/skills"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            Skills
                        </NavItem>
                        <NavItem
                            to="/contact"
                            onMouseEnter={mouseEnterHandler}
                            onMouseLeave={mouseLeaveHandler}
                        >
                            Contact
                        </NavItem>
                    </NavBar>
                    <Socials />
                    <Hamburger onClick={() => setHamburgerModal(true)}>
                        <CgMenuRight className="hamburger" />
                    </Hamburger>
                    <MobileNav
                        isHamburgerModal={isHamburgerModal}
                        setHamburgerModal={setHamburgerModal}
                    />
                </Right>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled.div`
    height: 100px;
    padding: 15px 0;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
    & .header-wrapper {
        height: 100%;
        display: flex;
        align-items: center;
    }
`;
const Left = styled.div`
    flex: 1;
`;
const LogoContainer = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    & span {
        font-family: "dm_sansbold";
    }
`;
const LogoBox = styled.div`
    width: 50px;
`;
const LogoImg = styled.img``;
const Right = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media all and (max-width: 1280px) {
        width: 60%;
    }
    @media all and (max-width: 980px) {
        width: 70%;
    }
    @media all and (max-width: 768px) {
        width: auto;
    }
`;
const NavBar = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 30px;
    @media all and (max-width: 980px) {
        gap: 20px;
    }
    @media all and (max-width: 768px) {
        display: none;
    }
`;
const NavItem = styled(NavLink)`
    display: inline-block;
    color: ${colors.text_grey};
    font-size: 16px;
    font-family: "dm_sansbold";
    &.active {
        color: #000;
    }
    &:hover {
        color: #000;
    }
`;
const Hamburger = styled.div`
    cursor: pointer;
    & .hamburger {
        font-size: 28px;
    }
    display: none;
    @media all and (max-width: 768px) {
        display: block;
    }
`;
export default Header;
