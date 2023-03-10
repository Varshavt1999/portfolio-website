import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
//icons
import { MdClose } from "react-icons/md";
import { colors } from "../../constants/Colors";

function MobileNav({ isHamburgerModal, setHamburgerModal }) {
    const hamburgerVariants = {
        hidden: {
            x: "100%",
        },
        show: {
            x: 0,
            transition: {
                ease: [0.6, 0.01, -0.05, 0.9],
            },
        },
    };
    return (
        <MainContainer
            variants={hamburgerVariants}
            initial="hidden"
            animate={isHamburgerModal ? "show" : ""}
        >
            <MenuList>
                <Icon onClick={() => setHamburgerModal(!isHamburgerModal)}>
                    <MdClose className="close" />
                </Icon>
                <NavItem
                    to="/"
                    onClick={() => setHamburgerModal(!isHamburgerModal)}
                >
                    Home
                </NavItem>
                <NavItem
                    to="/about"
                    onClick={() => setHamburgerModal(!isHamburgerModal)}
                >
                    About
                </NavItem>
                <NavItem
                    to="/works"
                    onClick={() => setHamburgerModal(!isHamburgerModal)}
                >
                    My Works
                </NavItem>
                <NavItem
                    to="/contact"
                    onClick={() => setHamburgerModal(!isHamburgerModal)}
                >
                    Contact
                </NavItem>
            </MenuList>
        </MainContainer>
    );
}
const MainContainer = styled(motion.div)`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    background-color: #fff;
    z-index: 10;
`;
const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: 100%;
    position: relative;
`;
const Icon = styled.div`
    position: absolute;
    left: 10px;
    top: 20px;
    cursor: pointer;
    & .close {
        font-size: 28px;
    }
`;
const NavItem = styled(NavLink)`
    display: inline-block;
    color: ${colors.text_grey};
    font-family: "dm_sansbold";
    font-size: 16px;
    &:hover {
        color: #000;
    }
    &.active {
        color: #000;
    }
`;
export default MobileNav;
