import React, { useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { transition1 } from "../../constants/Transitions";
// images
import ProfileImg from "../../assets/images/varsha.png";
// icons
import { MdArrowForward } from "react-icons/md";
// constants
import { colors } from "../../constants/Colors";
import { CursorContext } from "../../context/Store";

function About() {
  const navigate = useNavigate();
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <MainContainer
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={transition1}
    >
      <div className="wrapper">
        <Content>
          <Left>
            <Image
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <img src={ProfileImg} alt="profile-img" />
            </Image>
          </Left>
          <Right
            initial={{ opacity: 0, y: "-80%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-80%" }}
            transition={transition1}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            <Title>About Me</Title>
            <Description>
              <p>
                I enjoy creating things that live on the internet. Being in web
                development industry for over 2 and half year, i'm always
                motivated to do more.
              </p>
              <p>
                Hello! , My name is Varsha , Iam a Frontend developer with a
                Bachelors degree in Electronics and Communication .
              </p>
              <p>
                My top priority is to get your bussiness online the right way,
                giving you industry-standard design and all the functionality
                you need to operate smoothly online.
              </p>
            </Description>
            <SendBtn onClick={() => navigate("/works")}>
              <span>View My Works</span>
              <MdArrowForward className="arrow" />
            </SendBtn>
            {/* <SendBtn onClick={() => navigate("/qualifications")}>
                            <span>Qualifications</span>
                            <MdArrowForward className="arrow" />
                        </SendBtn> */}
          </Right>
        </Content>
      </div>
    </MainContainer>
  );
}
const MainContainer = styled(motion.div)`
  min-height: 100vh;
  padding-top: 100px;
  & .wrapper {
    height: 100%;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 0;
  @media all and (max-width: 900px) {
    flex-direction: column-reverse;
  }
  @media all and (max-width: 480px) {
    padding: 20px 0;
  }
`;
const Left = styled.div`
  width: 43%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media all and (max-width: 980px) {
    width: 40%;
  }
  @media all and (max-width: 900px) {
    width: 100%;
  }
`;
const Image = styled.div`
  width: 380px;
  @media all and (max-width: 1280px) {
    width: 330px;
  }
  @media all and (max-width: 980px) {
    width: 100%;
  }
  @media all and (max-width: 900px) {
    width: 350px;
    /* margin: 0 auto; */
  }
`;
const Right = styled(motion.div)`
  width: 45%;
  @media all and (max-width: 980px) {
    width: 50%;
  }
  @media all and (max-width: 900px) {
    width: 100%;
    margin-bottom: 70px;
    text-align: center;
  }
`;
const Title = styled.h3`
  font-size: 46px;
  font-family: "dm_sansbold";
  margin-bottom: 20px;
  @media all and (max-width: 1280px) {
    font-size: 42px;
  }
  @media all and (max-width: 1080px) {
    font-size: 38px;
    margin-bottom: 15px;
  }
  @media all and (max-width: 980px) {
    font-size: 36px;
    margin-bottom: 10px;
  }
  @media all and (max-width: 900px) {
    font-size: 34px;
  }
  @media all and (max-width: 768px) {
    font-size: 30px;
  }
  @media all and (max-width: 640px) {
    font-size: 28px;
  }
  @media all and (max-width: 480px) {
    font-size: 24px;
  }
`;
const Description = styled.div`
  font-size: 16px;
  line-height: 1.4;
  color: #6f7176;
  margin-bottom: 30px;
  & p {
    margin-bottom: 10px;
  }
  & p:last-child {
    margin-bottom: 0;
  }
  @media all and (max-width: 480px) {
    font-size: 14px;
  }
`;
const SendBtn = styled.div`
  color: #fff;
  padding: 15px 25px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary_black};
  cursor: pointer;
  gap: 5px;
  & span {
    font-size: 16px;
    font-family: "dm_sansmedium";
    @media all and (max-width: 900px) {
      font-size: 14px;
    }
  }
  & .arrow {
    transition: all 0.3s ease-in;
    font-size: 18px;
    @media all and (max-width: 480px) {
      font-size: 16px;
    }
  }
  &:hover {
    & .arrow {
      transition: all 0.3s ease-in;
    }
  }
  @media all and (max-width: 900px) {
    padding: 12px 20px;
  }
  @media all and (max-width: 900px) {
    margin: 0 auto;
  }
`;
export default About;
