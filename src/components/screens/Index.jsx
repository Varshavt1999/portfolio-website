import React, { useContext } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
// components
import Header from "../includes/Header";
import AnimRoutes from "../../routing/AnimRoutes";
import { colors } from "../../constants/Colors";
// constants
import { CursorContext } from "../../context/Store";

function Index() {
    const { cursorVariants, cursorBg } = useContext(CursorContext);
    return (
        <>
            <Header />
            <AnimRoutes />
            <Cursor variants={cursorVariants} animate={cursorBg}></Cursor>
        </>
    );
}
const Cursor = styled(motion.div)`
    width: 32px;
    height: 32px;
    background-color: ${colors.primary_black};
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 50%;
    z-index: 50;
    cursor: pointer;
    pointer-events: none;
`;
export default Index;
