import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../constants/Transitions";
// type animation
import { TypeAnimation } from "react-type-animation";
// icons
import { FiSend } from "react-icons/fi";
// constants
import { colors } from "../../constants/Colors";
import { CursorContext } from "../../context/Store";
// images
import ProfileImg from "../../assets/images/profile-2.png";

function Home() {
    const navigate = useNavigate();
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <MainContainer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition1}
        >
            <div className="wrapper">
                <LeftContainer
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: "-50%" }}
                    transition={transition1}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                >
                    <Name>VARSHA V T</Name>
                    <Designation>
                        <InitialText>Iam a ,</InitialText>
                        <MainText>
                            <TypeAnimation
                                sequence={[
                                    "Software Engineer",
                                    2000,
                                    "Front End Developer",
                                    2000,
                                    "React Js Developer",
                                    2000,
                                ]}
                                wrapper="div"
                                speed={50}
                                cursor={true}
                                repeat={Infinity}
                                style={{
                                    fontSize: "30px",
                                    fontFamily: "dm_sansbold",
                                }}
                            />
                        </MainText>
                    </Designation>
                    <Skills>HTML . CSS . JavaScript . ReactJS</Skills>
                    <Description>
                        Experienced Software Engineer with expertise in
                        Javascript and react Js. Skilled in writing clean and
                        maintainable code, with a focus on delivering efficient
                        solutions that meet bussiness requirements
                    </Description>
                    <SendBtn onClick={() => navigate("/contact")}>
                        <span>Say Hello</span>
                        <FiSend className="send" />
                    </SendBtn>
                </LeftContainer>
                <RightContainer
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={transition1}
                >
                    <ImageBox>
                        <motion.img
                            whileHover={{ scale: 1.1 }}
                            transition={transition1}
                            src={ProfileImg}
                            alt="profile-image"
                        />
                    </ImageBox>
                </RightContainer>
            </div>
        </MainContainer>
    );
}
const MainContainer = styled(motion.div)`
    height: 100vh;
    & .wrapper {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
`;
const LeftContainer = styled(motion.div)`
    flex: 1;
    margin-right: 80px;
    @media all and (max-width: 1200px) {
        margin-right: 30px;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        padding-top: 120px;
        /* padding: 150px 80px 0; */
        margin-bottom: 30px;
    }
`;
const Name = styled.h3`
    font-size: 28px;
    font-family: "dm_sansbold";
    @media all and (max-width: 1200px) {
        font-size: 24px;
    }
    @media all and (max-width: 480px) {
        font-size: 22px;
    }
`;
const Designation = styled.div`
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
    @media all and (max-width: 480px) {
        margin-bottom: 10px;
        align-items: unset;
        gap: 0;
    }
`;
const InitialText = styled.div`
    font-size: 20px;
    color: #595858;
    @media all and (max-width: 1200px) {
        font-size: 18px;
    }
    @media all and (max-width: 480px) {
        font-size: 16px;
        width: 100%;
    }
`;
const MainText = styled.div``;
const Skills = styled.div`
    font-size: 18px;
    color: #595858;
    margin-bottom: 20px;
    font-family: "dm_sansbold";
    @media all and (max-width: 480px) {
        font-size: 16px;
    }
`;
const Description = styled.p`
    font-size: 16px;
    color: #6f7176;
    line-height: 1.4;
    margin-bottom: 30px;
    @media all and (max-width: 480px) {
        font-size: 15px;
    }
    @media all and (max-width: 768px) {
        margin-bottom: 25px;
    }
    @media all and (max-width: 480px) {
        margin-bottom: 20px;
    }
`;
const SendBtn = styled.div`
    color: #fff;
    padding: 15px 25px;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${colors.primary_black};
    cursor: pointer;
    & span {
        font-size: 16px;
        font-family: "dm_sansmedium";
        @media all and (max-width: 480px) {
            font-size: 14px;
        }
    }
    & .send {
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
        font-size: 18px;
        @media all and (max-width: 900px) {
            font-size: 16px;
        }
    }
    &:hover {
        & .send {
            transform: rotate(0deg);
            transition: all 0.3s ease-in;
        }
    }
    @media all and (max-width: 900px) {
        padding: 12px 20px;
    }
`;
const RightContainer = styled(motion.div)`
    width: 45%;
    height: 100%;
    background-color: ${colors.primary_bg};
    position: relative;
    @media all and (max-width: 1280px) {
        width: 50%;
    }
    @media all and (max-width: 980px) {
        width: 100%;
        height: 400px;
    }
    @media all and (max-width: 640px) {
        height: 350px;
    }
`;
const ImageBox = styled.div`
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
    @media all and (max-width: 980px) {
        width: 50%;
        height: 100%;
        overflow: hidden;
        & img {
            height: 100%;
            object-fit: cover;
        }
    }
`;
export default Home;
